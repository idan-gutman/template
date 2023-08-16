import React from "react";
import useLocalStorage from "../../../Hooks/queryHooks/useLocalStorage";
import { Quote } from "../../../types/types";
import { styled } from "styled-components";

const Favorites = () => {
  const [favoriteQuotes] = useLocalStorage<Quote[]>("favoriteQuotes", []);

  const [searchQuote, setSearchQuote] = React.useState<string>("");

  const filteredQuotes = favoriteQuotes.filter((quote) =>
    quote.content.toLowerCase().includes(searchQuote.toLowerCase())
  );

  const FavoritesCards = () => (
    <CardWrapper>
      {filteredQuotes.map((quote) => (
        <FavoriteCard>
          <p>{quote?.content}</p>
          <p>Author: {quote?.author}</p>
        </FavoriteCard>
      ))}
    </CardWrapper>
  );

  return (
    <Fvorites>
      <h2>Favorites</h2>

      {filteredQuotes.length === 0 ? (
        <p>No favorite quotes yet.</p>
      ) : (
        <FavWrapper>
          <InputSearch
            type="text"
            placeholder="Search Quotes..."
            value={searchQuote}
            onChange={(e) => setSearchQuote(e.target.value)}
          />
          <FavoritesCards />
        </FavWrapper>
      )}
    </Fvorites>
  );
};

export default Favorites;

const Fvorites = styled.div.attrs({ className: "Fvorites" })`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
  }
`;

const CardWrapper = styled.div.attrs({ className: "CardWrapper" })`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  display: grid;
  justify-items: center;
  gap: 20px;
  justify-content: center;
`;
const FavWrapper = styled.div.attrs({ className: "FavWrapper" })`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
const FavoriteCard = styled.div.attrs({ className: "FavoriteCard" })`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: azure;
  padding: 10px;
`;

const InputSearch = styled.input.attrs({ className: "input" })`
  width: 50%;
  padding: 5px 10px;
`;
