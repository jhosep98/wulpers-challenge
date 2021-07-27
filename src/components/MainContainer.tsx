import { useQuery, gql } from "@apollo/client";
import { Characters } from "../interfaces/interfaces";
import CardItem from "./CardItem";

const GET_CHARACTER_QUERY = gql`
  query {
    characters(filter: { name: "rick" }) {
      results {
        image
        status
        name
        species
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

const MainContainer = () => {
  const { loading, data } = useQuery<Characters>(GET_CHARACTER_QUERY);
 
  return <>{loading ? <p>Loading</p> : <CardItem />}</>;
};

export default MainContainer;
