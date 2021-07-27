import { useGetCharacters } from "../graphql/queries";
import CardItem from "./CardItem";

const MainContainer = () => {
  const characters = useGetCharacters();

  return (
    <CardItem
      characters={characters?.data || []}
      loading={characters?.loading || false}
    />
  );
};

export default MainContainer;
