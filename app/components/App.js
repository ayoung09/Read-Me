import React from 'react';

const App = ({ children }) => {
  return (
    <div className="container-fluid no-overflow">
      <div className="row pad5">
        <h1 className="header">Read Me</h1>
      </div>
      { children }
    </div>
  );
};

export default App;
