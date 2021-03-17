import nanoid from "nanoid";

const DEFAULT_DECKS = [
  {
    id: nanoid(),
    name: "JS · MDN definitions",
    cards: [
      {
        id: nanoid(),
        question:
          "Function that evaluates JavaScript code represented as a string.",
        answer: "eval() ",
        nailed: false,
      },
      {
        id: nanoid(),
        question:
          "Global property that represents the primitive value Not-A-Number.",
        answer: "NaN",
        nailed: false,
      },
      {
        id: nanoid(),
        question:
          "Global property that represents the primitive value undefined.",
        answer: "undefined",
        nailed: false,
      },
      {
        id: nanoid(),
        question: "Object that are thrown when runtime errors occur.",
        answer: "Error",
        nailed: false,
      },
      {
        id: nanoid(),
        question:
          "Object that holds key-value pairs and remembers the original insertion order of the keys.",
        answer: "Map",
        nailed: false,
      },
      {
        id: nanoid(),
        question:
          "Object that lets you store unique values of any type, whether primitive values or object references.",
        answer: "Set",
        nailed: false,
      },
      {
        id: nanoid(),
        question:
          "Object that contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON.",
        answer: "JSON",
        nailed: false,
      },
      {
        id: nanoid(),
        question:
          "Object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
        answer: "Promise",
        nailed: false,
      },
    ],
  },
];

export default DEFAULT_DECKS;
