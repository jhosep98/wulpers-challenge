import { useState } from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { Character } from "../interfaces/interfaces";

type CharactersProps = {
  characters: Character[];
  loading: boolean;
};

const CardItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomCardContent = styled(CardContent)`
  flex: 1 0 auto;
  padding: 5px;
  padding-bottom: 0px !important;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

const Status = styled.span`
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.2rem;
  margin-bottom: 0.4rem;
`;

const CustomTypography = styled(Typography)`
  color: #aaa;
  font-size: 12px;
`;
const Span = styled.span`
  font-size: 12px;
  margin-left: 0.5rem;
`;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      margin: "0.7rem",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      width: 297,
    },
    details: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#232E13",
      color: "#fff",
      width: "100%",
    },
    cover: {
      width: 140,
      height: 140,
    },
    status: {
      backgroundColor: "#fedf",
    },
  })
);

const CardItem = (props: CharactersProps) => {
  const { characters, loading } = props;
  const [pageNumber, setPageNumber] = useState(0);

  const classes = useStyles();

  const characterPerPage = 3;
  const pagesVisited = pageNumber * characterPerPage;

  const displayCharacters = characters
    .slice(pagesVisited, pagesVisited + characterPerPage)
    .map((character) => {
      return (
        <Card className={classes.root} key={character.id}>
          <CardMedia
            className={classes.cover}
            image={character.image}
            title={character.name}
          />

          <div className={classes.details}>
            <CustomCardContent>
              <TitleContainer>
                <Status />
                <Typography variant="subtitle2">{character.name}</Typography>
              </TitleContainer>
              <CustomTypography variant="body2">Specie:</CustomTypography>
              <Span>{character.species}</Span>

              <CustomTypography variant="subtitle2">Origin:</CustomTypography>
              <Span>{character.origin.name}</Span>

              <CustomTypography variant="subtitle2">Location:</CustomTypography>
              <Span>{character.location.name}</Span>
            </CustomCardContent>
          </div>
        </Card>
      );
    });

  return (
    <CardItemContainer>
      {loading ? <CircularProgress /> : displayCharacters}
    </CardItemContainer>
  );
};

export default CardItem;
