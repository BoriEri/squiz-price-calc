import React from 'react';


const studysetinput = (props) => {
  return (
    <div className="Input">
      <p>Number of studysets:  </p>
      <input type="text" onChange={props.changed} value={props.studysets}/>
    </div>
  )
};

export default studysetinput;