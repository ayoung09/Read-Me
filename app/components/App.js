import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  flashcards: state.flashcards.flashcards,
});

const App = ({ flashcards, children }) => {
  return (
    <div className="container-fluid no-overflow">
      <div className="row pad5">
      {flashcards.length > 0 &&
        <Link to="/flashcard"><button className="btn btn-flashcards">Flashcards: {flashcards.length}</button></Link>}
        <Link to="/welcome" className="link">
          <h1 className="header">Read Me</h1>
        </Link>
      </div>
      { children }
    </div>
  );
};

export default connect(mapStateToProps)(App);
