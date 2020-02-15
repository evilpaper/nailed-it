import nanoid from "nanoid";

const START_DECKS = [
  {
    id: nanoid(),
    name: "My First Deck",
    cards: [
      {
        id: nanoid(),
        question: "Question",
        answer: "Answer"
      }
    ]
  }
];

export default START_DECKS;
