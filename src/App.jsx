import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quiz from './components/quiz';
const questions = [
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
      {question: 'To manage communication between React and external libraries', answer: true}
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
const router = createBrowserRouter([
  {
    path: '/',
    element: <Quiz questions={questions}></Quiz>
  },
  
])
function App() {
 return(
  <RouterProvider router={router}></RouterProvider>
 )
}

export default App
