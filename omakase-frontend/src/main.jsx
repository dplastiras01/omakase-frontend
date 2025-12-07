// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './Components/HomePage';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import './Components/ask3.css';

function CssLayout() {
  return (
    <div className='with-css'>
      <Outlet />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route index element={<HomePage />} />

        {/* No CSS: top-level routes */}
        <Route path='/ex_03_start' element={<FirstPage />} />
        <Route path='/ex_03b_start' element={<SecondPage />} />

        {/* With CSS: top-level routes under CssLayout */}
        <Route element={<CssLayout />}>
          <Route path='/ex_03' element={<FirstPage />} />
          <Route path='/ex_03b' element={<SecondPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
