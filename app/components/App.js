import React from 'react';
import {Link} from 'react-router';

const App = ({ children }) => {
  return (
    <div className="container-fluid no-overflow">
      <div className="row pad5">
        <Link to="/welcome" className="link">
          <h1 className="header">Read Me</h1>
        </Link>
      </div>
      { children }
    </div>
  );
};

export default App;
