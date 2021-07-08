import React, { useState } from 'react';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

const PageAdapter = () => {
  const [page, setPage] = useState(0);
  const pages = [
    <LoginPage setPage={setPage} />,
    <HomePage setPage={setPage} />,
  ];
  return pages[page];
};

export default PageAdapter;
