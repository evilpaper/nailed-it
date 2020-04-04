import nanoid from "nanoid";

const START_DECKS = [
  {
    id: nanoid(),
    name: "My first deck · Click to edit",
    cards: [
      {
        id: nanoid(),
        question: "Click to edit",
        answer: "Click to edit",
        nailed: false
      }
    ]
  }
];

export default START_DECKS;
