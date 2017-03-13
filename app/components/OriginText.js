import React from 'react';
import axios from 'axios';


const OriginText = (props) => {
  const currentText = props.currentText;

  return (
    <div className="row origin-text pad10 pad-outer-20">
      <h4>{currentText.title}</h4>
      <span>{currentText.body}</span>
    </div>
  )
}

export default OriginText;
