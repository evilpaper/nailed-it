import React, { useState } from "react";
import Decks from "./Decks";
import "./app.css";
import nanoid from "nanoid";

export default function App() {
  const [decks, setDecks] = useState(startDecks);

  return (
    <div className="n-app">
      <div className="n-header">
        <span>Logo</span>
        <button>Sign in</button>
      </div>
      <div className="n-divider"></div>
      <Decks decks={decks} />
    </div>
  );
}

const startDecks = [
  {
    id: nanoid(),
    name: "My First French Deck",
    cards: [
      {
        id: nanoid(),
        question: "The girl",
        answer: "La fille"
      },
      {
        id: nanoid(),
        question: "The boy",
        answer: "Le garcon"
      }
    ]
  },
  {
    id: nanoid(),
    name: "My Second French Deck",
    cards: [
      {
        id: nanoid(),
        question: "I am",
        answer: "Je suis"
      }
    ]
  }
];
