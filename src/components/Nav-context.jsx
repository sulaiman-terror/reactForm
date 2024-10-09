
import { createContext, useState } from 'react';

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [navLinks, setNavLinks] = useState([
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]);

  return (
    <NavContext.Provider value={{ navLinks, setNavLinks }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavProvider, NavContext };