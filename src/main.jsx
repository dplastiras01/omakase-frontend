  import React, { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';

  import './index.css';

  import Layout from './shared/layout';
  import FirstPage from './Exercise 3/FirstPage';
  import SecondPage from './Exercise 3/SecondPage';
  import HomePage from './home/page';

  const router = createBrowserRouter([
    {
      path: '/',  
      element: <Layout />,
      children: [
        { index: true, path: 'first', element: <FirstPage /> }, // "/"
        { path: 'second', element: <SecondPage /> }, // "/second"
        { path: 'third', element: <HomePage /> }, // "/third"
        { path: '*', element: <h1>Not Found</h1> },
      ],
    },
  ]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
