import nanoid from "nanoid";

const START_DECKS = [
  {
    id: nanoid(),
    name: "JS · MDN definitions",
    cards: [
      {
        id: nanoid(),
        question: "The  _____  function evaluates JavaScript code represented as a string.",
        answer: "eval() ",
        nailed: false,
      },
      {
        id: nanoid(),
        question: "The global  _____  property represents the primitive value Not-A-Number.",
        answer: "NaN",
        nailed: false,
      },
      {
        id: nanoid(),
        question: "The global  _____  property represents the primitive value undefined.",
        answer: "undefined",
        nailed: false,
      },
      {
        id: nanoid(),
        question: "The  _____  object are thrown when runtime errors occur. ",
        answer: "Error",
        nailed: false,
      }
    ],
  },
];

export default START_DECKS;
