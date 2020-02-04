import nanoid from "nanoid";

const START_DECKS = [
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

export default START_DECKS;
