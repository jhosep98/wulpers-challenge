import { CircularProgress } from "@material-ui/core";
import { Character } from "../interfaces/interfaces";

type CharactersProps = {
  characters: Character[];
  loading: boolean;
};

const CardItem = (props: CharactersProps) => {
  const { characters, loading } = props;
  return (
    <div>
      {loading ?<CircularProgress /> : characters.map((character) => (
        <p>{character.name}</p>
      ))}
    </div>
  );
};

export default CardItem;
