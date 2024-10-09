import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HOME from './Pages/HOME';
import ABOUT from './Pages/ABOUT';
import CONTACT from './Pages/CONTACT';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HOME/>} />
      <Route path="/about" element={<ABOUT/>} />
      <Route path="/contact" element={<CONTACT/>} />
    </Routes>
  );
};

export default AppRoutes;