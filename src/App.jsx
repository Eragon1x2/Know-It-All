import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quiz from './components/quiz';
import ErrorPage from './routes/ErrorPage';
import MainPage from './routes/MainPage';
import Root from './routes/Root';


const router = createBrowserRouter([
  {
    path: '/Know-It-All',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      {
        path: 'quizs/:quizName',
        element: <Quiz></Quiz>
      }
    ]
  },
  
])
function App() {
 return(
  <RouterProvider router={router}></RouterProvider>
 )
}

export default App
