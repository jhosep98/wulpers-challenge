import { gql, useQuery } from "@apollo/client";
import { Character } from "../interfaces/interfaces";

export const GET_CHARACTERS_QUERY = gql`
  query {
    characters(page: 1, filter: { name: "rick" }) {
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

export const useGetCharacters = ():
  | { loading: boolean; data: Character[] }
  | undefined => {
  const { loading, data } = useQuery(GET_CHARACTERS_QUERY);
  return {
    loading,
    data: data?.characters?.results,
  };
};
