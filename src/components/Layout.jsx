// Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import useScrollToTop from './ScrollTop'; // Correctly import the useScrollToTop hook

const Layout = ({ children }) => {
  useScrollToTop(); // Use the custom hook here

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
