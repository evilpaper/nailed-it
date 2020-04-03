import nanoid from "nanoid";

const START_DECKS = [
  {
    id: nanoid(),
    name: "My Dang Deck",
    cards: [
      {
        id: nanoid(),
        question: "A question",
        answer: "An answer",
        nailed: false
      }
    ]
  }
];

export default START_DECKS;
