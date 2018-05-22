import React from 'react';


const studentsinput = (props) => {
  return (
    <div className="Input">
      <p>Number of students:  </p>
      <input type="text" onChange={props.changed} value={props.students}/>
    </div>
  )
};

export default studentsinput;