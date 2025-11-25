import { createBrowserRouter, redirect } from 'react-router-dom';
import Layout from './shared/layout';
import HomePage from '../home/page';
import FirstPage from './Exercise3/FirstPage';
import SecondPage from './Exercise3/SecondPage';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'first', element: <FirstPage /> },
        { path: 'second', element: <SecondPage /> },
        { path: '*', element: <h1>Not Found</h1> },
      ],
    },
    // Optional: redirect any top-level non-matching path
    // { path: "*", loader: () => redirect("/") },
  ]);
