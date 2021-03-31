import nanoid from "nanoid";

const DEFAULT_DECKS = [
  {
    id: nanoid(),
    name: "JavaScript Standard Built-in Objects · MDN",
    cards: [
      {
        id: nanoid(),
        question:
          "Global property that represents the primitive value Not-A-Number.",
        answer: "NaN",
        nailed: false,
        flipped: false,
        number: 1,
      },
      {
        id: nanoid(),
        question:
          "Global property that represents the primitive value undefined.",
        answer: "undefined",
        nailed: false,
        flipped: false,
        number: 2,
      },
      {
        id: nanoid(),
        question: "Object that are thrown when runtime errors occur.",
        answer: "The Error Object",
        nailed: false,
        flipped: false,
        number: 3,
      },
      {
        id: nanoid(),
        question:
          "Object that holds key-value pairs and remembers the original insertion order of the keys.",
        answer: "The Map Object",
        nailed: false,
        flipped: false,
        number: 4,
      },
      {
        id: nanoid(),
        question:
          "Object that lets you store unique values of any type, whether primitive values or object references.",
        answer: "The Set Object",
        nailed: false,
        flipped: false,
        number: 5,
      },
      {
        id: nanoid(),
        question:
          "Object that contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON.",
        answer: "The JSON Object",
        nailed: false,
        flipped: false,
        number: 6,
      },
      {
        id: nanoid(),
        question:
          "Object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
        answer: "The Promise object",
        nailed: false,
        flipped: false,
        number: 7,
      },
      {
        id: nanoid(),
        question:
          "Method that takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises",
        answer: "Promise.all() method",
        nailed: false,
        flipped: false,
        number: 8,
      },
      {
        id: nanoid(),
        question:
          "Array-like object accessible inside functions that contains the values of the arguments passed to that function.",
        answer: "arguments",
        nailed: false,
        flipped: false,
        number: 9,
      },
      {
        id: nanoid(),
        question:
          "Syntax allows us to represent an indefinite number of arguments as an array.",
        answer: "The rest parameter",
        nailed: false,
        flipped: false,
        number: 10,
      },
      {
        id: nanoid(),
        question:
          "Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls)",
        answer: "the spread syntax (...)",
        nailed: false,
        flipped: false,
        number: 11,
      },
    ],
  },
];

export default DEFAULT_DECKS;
