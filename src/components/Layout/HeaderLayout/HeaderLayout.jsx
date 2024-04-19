import React from 'react';
import Header from '../../Header/Header';

const HeaderLayout = ({ children }) => {
  return (
    <header>
      <Header />
      {children}
    </header>
  );
};

export default HeaderLayout;
