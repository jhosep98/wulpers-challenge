import { gql, useQuery } from "@apollo/client";
import { Character } from "../interfaces/interfaces";

export const GET_CHARACTERS_QUERY = gql`
  query Character($name: String!){
    characters(page: 1, filter: { name: $name }) {
      results {
        id
        name
        image
        status
        species
        gender
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;

export const useGetCharacters = (
  name: string
): { loading: boolean; data: Character[] } | undefined => {
  const { loading, data } = useQuery(GET_CHARACTERS_QUERY, {
    variables: { name },
  });
  return {
    loading,
    data: data?.characters?.results,
  };
};
