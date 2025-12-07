import { createBrowserRouter, redirect } from 'react-router-dom';
import HomePage from '../home/ex_03_start';
import FirstPage from '../Components/FirstPage';
import SecondPage from '../Components/SecondPage';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <div />,
      children: [
        { index: true, path: '/', element: <HomePage /> },
        { path: 'ex_03_start', element: <FirstPage /> },
        { path: 'ex_03b_start', element: <SecondPage /> },
        { path: 'ex_03', element: <FirstPage /> },
        { path: 'ex_03b', element: <SecondPage /> },
        { path: '*', element: <h1>Not Found</h1> },
      ],
    },
    // Optional: redirect any top-level non-matching path
    // { path: "*", loader: () => redirect("/") },
  ]);
