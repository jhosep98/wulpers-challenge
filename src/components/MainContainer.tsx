import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useGetCharacters } from "../graphql/queries";
import CardItem from "./CardItem";

const MainContainer = () => {
  const { searchValue } = useContext(SearchContext);
  const characters = useGetCharacters(searchValue);
  return (
    <CardItem
      characters={characters?.data || []}
      loading={characters?.loading || false}
    />
  );
};

export default MainContainer;
