import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  allTexts: state.originText.allTexts,
});

const Welcome = ({allTexts}) => {

  return (
    <div>
      <h2 className="sub-header pad5">Select a text below to begin your reading practice</h2>
      <div className="row text-row">
        {allTexts.length && allTexts.map(text => {
          return (
            <Link key={text.id} to={`readText/${text.id}`}>
              <button className="btn btn-lg btn-title marg5">{text.title}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};


export default connect(mapStateToProps, null)(Welcome);
