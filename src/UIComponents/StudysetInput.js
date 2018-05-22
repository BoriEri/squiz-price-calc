import React from 'react';


const studysetinput = (props) => {
  return (
    <div className="Input">
      <p>Total number of studyset submission (by all students):  </p>
      <input type="text" onChange={props.changed} value={props.studysets}/>
    </div>
  )
};

export default studysetinput;