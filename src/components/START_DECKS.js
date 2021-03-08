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
        question: "The  _____  object are thrown when runtime errors occur.",
        answer: "Error",
        nailed: false,
      }
      {
        id: nanoid(),
        question: "The  _____  object holds key-value pairs and remembers the original insertion order of the keys.  ",
        answer: "Map",
        nailed: false,
      }
      {
        id: nanoid(),
        question: "The  _____  object lets you store unique values of any type, whether primitive values or object references.",
        answer: "Set",
        nailed: false,
      }
      {
        id: nanoid(),
        question: "The  _____  object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON.",
        answer: "JSON",
        nailed: false,
      }
      {
        id: nanoid(),
        question: "The  _____  object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
        answer: "Promise",
        nailed: false,
      }
    ],
  },
];

export default START_DECKS;
