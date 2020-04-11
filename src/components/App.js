import React, { useState, useEffect } from "react";
import Decks from "./Decks";
import "./app.css";
import nanoid from "nanoid";
import nailedItLogo from "./../images/nailed-it-logo-bw.png";
import { TiTabsOutline } from "react-icons/ti";

import START_DECKS from "./START_DECKS";

const LOCAL_STORAGE_KEY = "nailed-it.decks";

export default function App() {
  const [decks, setDecks] = useState(START_DECKS);

  useEffect(() => {
    const decksJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (decksJSON != null) setDecks(JSON.parse(decksJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(decks));
  }, [decks]);

  class Card {
    constructor() {
      this.id = nanoid();
      this.question = "Can you do it? · Click to edit question";
      this.answer = "Hell yes! · Click to edit answer";
      this.nailed = false;
    }
  }
  class Deck {
    constructor() {
      this.id = nanoid();
      this.name = "A Tricky Deck · Click to edit title";
      this.cards = [new Card()];
    }
  }

  const addDeck = () => {
    const newDeck = new Deck();
    const newDecks = [newDeck, ...decks];
    setDecks(newDecks);
  };

  const deleteDeck = (deckID) => {
    const newDecks = [...decks].filter((d) => d.id !== deckID);
    setDecks(newDecks);
  };

  const addCardToDeck = (deckID) => {
    const newCard = new Card();
    const newDecks = [...decks];
    const index = newDecks.findIndex((d) => d.id === deckID);
    newDecks[index].cards = [newCard, ...newDecks[index].cards];
    setDecks(newDecks);
  };

  const removeCardFromDeck = (cardID, deckID) => {
    const newDecks = [...decks];
    const index = newDecks.findIndex((d) => d.id === deckID);
    newDecks[index].cards = newDecks[index].cards.filter(
      (c) => c.id !== cardID
    );
    setDecks(newDecks);
  };

  const shuffleDeck = (deckID) => {
    const newDecks = [...decks];
    const index = newDecks.findIndex((d) => d.id === deckID);
    const deckToShuffle = newDecks[index].cards;
    for (let i = deckToShuffle.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deckToShuffle[i], deckToShuffle[j]] = [
        deckToShuffle[j],
        deckToShuffle[i],
      ];
    }
    newDecks[index].cards = deckToShuffle;
    setDecks(newDecks);
  };

  const handleCardContentChange = (changes, cardID, deckID) => {
    const newDecks = [...decks];
    const deckIndex = newDecks.findIndex((d) => d.id === deckID);
    const cardIndex = newDecks[deckIndex].cards.findIndex(
      (c) => c.id === cardID
    );
    const newCard = newDecks[deckIndex].cards[cardIndex];
    newDecks[deckIndex].cards[cardIndex] = { ...newCard, ...changes };
    setDecks(newDecks);
  };

  const handleDeckNameChange = (name, deckID) => {
    const newDecks = [...decks];
    const index = newDecks.findIndex((d) => d.id === deckID);
    newDecks[index].name = name;
    setDecks(newDecks);
  };

  return (
    <div className="app">
      <div className="header">
        <div className="header__left-part">
          {" "}
          <div className="logo">
            <img
              src={nailedItLogo}
              alt="Nailed It"
              width="48px"
              height="48px"
            ></img>
          </div>
        </div>
        <button id="sign-in">Sign in</button>
      </div>
      <div className="main">
        <button className="add-deck" onClick={addDeck}>
          <TiTabsOutline className="add-deck__icon" /> Create deck
        </button>
        <Decks
          decks={decks}
          addCardToDeck={addCardToDeck}
          removeCardFromDeck={removeCardFromDeck}
          shuffleDeck={shuffleDeck}
          handleCardContentChange={handleCardContentChange}
          handleDeckNameChange={handleDeckNameChange}
          deleteDeck={deleteDeck}
        />
      </div>
      <div className="footer">
        <p>
          <strong>Nailed It</strong> is created by Pelle Lundgren
        </p>
      </div>
    </div>
  );
}
