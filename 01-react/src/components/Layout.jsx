import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h2>React</h2>
      </header>

      <main>{children}</main>

      <footer>&copy; MMX - {new Date().getFullYear()}</footer>
    </>
  );
};

export default Layout;
