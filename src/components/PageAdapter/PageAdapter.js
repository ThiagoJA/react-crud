import React, { useState } from 'react';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import StoreProvider from '../Store/Provider';

const PageAdapter = () => {
  const [page, setPage] = useState(0);
  const pages = [
    <LoginPage setPage={setPage} />,
    <HomePage setPage={setPage} />,
  ];
  return (
    <StoreProvider>
      {pages[page]}
    </StoreProvider>
  );
};

export default PageAdapter;
