import React from 'react';
import localFont from 'next/font/local';
const Bigola = localFont({ src: '../styles/fonts/Bigola-Display-Regular.ttf' });
const Gotham = localFont({ src: '../styles/fonts/Gotham-Book.otf' });
const Gotham_Bold = localFont({ src: '../styles/fonts/Gotham-Bold.otf' });
export const ColombianContext = React.createContext({});

const ColombianContextProvider = ({ children }) => {
  return (
    <ColombianContext.Provider value={{ Bigola, Gotham, Gotham_Bold }}>
      {children}
    </ColombianContext.Provider>
  );
};

export default ColombianContextProvider;
