import React from "react";
import useRandomQuote from "../../../Hooks/queryHooks/useRandomQuote";
import { styled } from "styled-components";
import useLocalStorage from "../../../Hooks/queryHooks/useLocalStorage";
import { Quote } from "../../../types/types";
import { FiHeart } from "react-icons/fi";

const Generator = () => {
  const { quote, refetch } = useRandomQuote();
  const handelClick = () => {
    refetch();
  };

  const [favoriteQuotes, setFavoriteQuotes] = useLocalStorage<Quote[]>(
    "favoriteQuotes",
    []
  );

  const isQuoteFavorite = favoriteQuotes.some(
    (favQuote) => favQuote?._id === quote?._id
  );

  const handleToggleFavorite = () => {
    if (isQuoteFavorite) {
      setFavoriteQuotes(
        favoriteQuotes.filter((favQuote) => favQuote?._id !== quote?._id)
      );
    } else {
      setFavoriteQuotes([...favoriteQuotes, quote]);
    }
  };

  return (
    <GeneratorWrapper>
      <h2>Amazing quotes of all time at the click of a button</h2>
      <Card>
        <QuoteWrapper>
          <p>{quote?.content}</p>
          <p title="Source Title">Author: {quote?.author ?? "none"}</p>
        </QuoteWrapper>
        <Footer>
          <Button onClick={handelClick}>New Quote</Button>
        </Footer>
      </Card>

      <ButtonLike onClick={handleToggleFavorite}>
        <FiHeart
          color={isQuoteFavorite ? "red" : "gray"}
          size={24}
          style={{
            cursor: "pointer",
            border: "none",
            background: "none",
          }}
        />
      </ButtonLike>
    </GeneratorWrapper>
  );
};

export default Generator;

const GeneratorWrapper = styled.div.attrs({ className: "GeneratorWrapper" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  h2 {
    margin-bottom: 30px;
  }
`;
const Card = styled.div.attrs({ className: "Card" })`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const QuoteWrapper = styled.div.attrs({ className: "QuoteWrapper" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;
const Footer = styled.div.attrs({ className: "Footer" })``;
const Button = styled.button.attrs({ className: "Button" })`
`;
const ButtonLike = styled.button.attrs({ className: "ButtonLike" })`
  cursor: pointer;
  border: none;
  background: none;
  margin-top: 30px;
`;
