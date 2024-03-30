export const react_basic = [
    {
        id: 0,
        gg: [
            {
              title: 'What is the virtual DOM?',
              id: 1,
              questions: [
                {question: 'The actual HTML document displayed in the browser', answer: false},
                {question: 'A library for optimizing component performance', answer: false},
                {question: ' An in-memory representation of the UI', answer: true},
                {question: "A way to style React components", answer: false}
              ]
            },
            {
              title: 'What is JSX in React?',
              id: 2,
              questions: [
                {question: 'A styling language for React components', answer: false},
                {question: 'A templating language that mixes JavaScript and HTML', answer: true},
                {question: 'A library for managing state in React applications', answer: false},
                {question: 'A framework for building single-page applications (SPAs)', answer: false}
              ]
            },
            {
              title: 'What is the purpose of props in React?',
              id: 3,
              questions: [
                {question: 'To pass data down from parent to child components', answer: true},
                {question: 'To define the layout of a component', answer: false},
                {question: 'To handle user interactions within a component', answer: false},
                {question: 'To manage communication between React and external libraries', answer: false}
              ]
            },
            {
              title: 'Which lifecycle method is used to run code after a component is inserted into the DOM?',
              id: 4,
              questions: [
                {question: 'componentDidMount', answer: true},
                {question: 'componentWillMount', answer: false},
                {question: 'render', answer: false},
                {question: 'getInitialState', answer: false}
              ]
            }
          ]
    },
    {
      id: 1,
      gg: [
        {
          title: 'Which React Hook is most commonly used to manage component state in a functional component?',
          id: 1,
          questions: [
            {question: 'useEffect', answer: false},
            {question: 'useState', answer: true},
            {question: 'useContext', answer: false},
            {question: "useReducer", answer: false}
          ]
        },
        {
          title: 'What is the purpose of the useEffect Hook?',
          id: 2,
          questions: [
            {question: 'To perform side effects in functional components (e.g., data fetching, subscriptions).', answer: true},
            {question: 'To manage component state based on props changes.', answer: false},
            {question: 'To share state between unrelated components.', answer: false},
            {question: 'To optimize component rendering performance.', answer: false}
          ]
        },
        {
          title: "Consider a scenario where you need to track the user's progress through your quiz (e.g., current question number). Which Hook would be most suitable?",
          id: 3,
          questions: [
            {question: 'useRef', answer: true},
            {question: 'useState', answer: false},
            {question: 'useContext', answer: false},
            {question: 'useCallback', answer: false}
          ]
        },
        {
          title: "You're building a timer functionality for each question in your quiz. How can you achieve this using React Hooks?",
          id: 4,
          questions: [
            {question: 'By manipulating the DOM directly within the component.', answer: false},
            {question: 'Utilize a third-party library specifically for timers.', answer: false},
            {question: "React Hooks don't offer functionality for timers.", answer: false},
            {question: 'Leverage the setInterval function inside useEffect with a cleanup function.', answer: true}
          ]
        },
        {
          title: "Imagine you want to display a congratulations message after the user finishes the quiz. Which Hook can help conditionally render this message based on the quiz completion state?",
          id: 5,
          questions: [
            {question: 'useLayoutEffect', answer: false},
            {question: 'useState', answer: true},
            {question: "useMemo", answer: false},
            {question: 'useCallback', answer: false}
          ]
        }
      ]
    },
    {
      id: 2,
      gg: [
        {
          title: 'What is the main benefit of using TypeScript compared to plain JavaScript for building web applications?',
          id: 1,
          questions: [
            {question: 'Faster execution speed in the browser.', answer: false},
            {question: 'Improved code organization and readability.', answer: false},
            {question: 'Automatic memory management.', answer: false},
            {question: " TypeScript introduces new functionalities not available in JavaScript.", answer: true}
          ]
        },
        {
          title: 'Which of the following keywords defines a variable with a specific data type in TypeScript?',
          id: 2,
          questions: [
            {question: 'var', answer: false},
            {question: 'let', answer: false},
            {question: 'const', answer: false},
            {question: 'All of the above can be used with data types. ', answer: true}
          ]
        },
        {
          title: `onsider the following code snippet:let name: string = "John";                 What does the string keyword represent in this code?`,
          id: 3,
          questions: [
            {question: 'A function that returns a string value.', answer: false},
            {question: 'A variable name used to store data.', answer: false},
            {question: ' A library that provides string manipulation functions.', answer: true},
          ]
        },
        {
          title: "TypeScript offers interfaces to define the structure of objects. What is a key advantage of using interfaces?",
          id: 4,
          questions: [
            {question: ' Interfaces directly create objects at runtime.', answer: false},
            {question: ' Interfaces enforce code consistency by defining expected object properties. ', answer: true},
            {question: "Interfaces improve performance by optimizing object creation.", answer: false},
            {question: 'Interfaces provide a way to document object structure for better code understanding.', answer: false}
          ]
        },
        {
          title: "Imagine a function that takes a number as input and returns its square. How can you define the type signature of this function in TypeScript?",
          id: 5,
          questions: [
            {question: 'No need for type signatures, TypeScript can infer them automatically.', answer: false},
            {question: 'function square(value): any', answer: true},
            {question: "function square(number): number", answer: false},
            {question: "TypeScript doesn't support function type definitions.", answer: false}
          ]
        }
      ]
    }
]