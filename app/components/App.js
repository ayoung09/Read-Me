import React from 'react';
import Nav from './Nav';

const App = ({ children }) => {
  return (
    <div className="container-fluid no-overflow">
      <Nav />
      { children }
    </div>
  );
};

export default App;
