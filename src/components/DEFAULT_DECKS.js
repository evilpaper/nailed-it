import nanoid from "nanoid";

const DEFAULT_DECKS = [
  {
    id: nanoid(),
    name: "JS · MDN definitions",
    cards: [
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
      {
        id: nanoid(),
        question:
          "Method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises",
        answer: "Promise.all()",
        nailed: false,
      },
      {
        id: nanoid(),
        question:
          "Array-like object accessible inside functions that contains the values of the arguments passed to that function.",
        answer: "arguments",
        nailed: false,
      },
      {
        id: nanoid(),
        question:
          "Syntax allows us to represent an indefinite number of arguments as an array.",
        answer: "The rest parameter",
        nailed: false,
      },
      {
        id: nanoid(),
        question:
          "Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls)",
        answer: "Spread syntax (...)",
        nailed: false,
      },
    ],
  },
];

export default DEFAULT_DECKS;
