import React, { useState } from "react";
import Card from "./Card";
import nanoid from "nanoid";

export default function Deck(props) {
  const { cards, id } = props;
  const [cardsInDeck, setCardsInDeck] = useState(cards);

  function handleCardAdd() {
    const newCard = {
      id: nanoid(),
      question: "Question",
      answer: "Answer"
    };
    setCardsInDeck([...cardsInDeck, newCard]);
  }

  return (
    <div className="n-deck">
      <div className="n-deck-menu">
        <h2 className="n-deck-name">My Awesome Deck</h2>
        <button onClick={handleCardAdd}>Add card</button>
        <button>Start Study</button>
      </div>
      <div className="n-deck-cards">
        {cardsInDeck.map(card => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
}
