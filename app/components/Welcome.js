import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  allTexts: state.originText.allTexts,
});

const Welcome = ({allTexts}) => {

  return (
    <div>
      <h1>Welcome to Read Me</h1>
      <h3>Select a text below to begin your reading practice</h3>
      {allTexts.length && allTexts.map(text => {
        return (
          <Link key={text.id} to={`readText/${text.id}`}><button>{text.title}</button></Link>
        );
      })}
    </div>
  );
};


export default connect(mapStateToProps, null)(Welcome);
