import React from 'react';


const useroutput = (props) => {
  return (
    <div className="Output">
      <p onClick={props.click}>Calculated annual price: {props.amount} USD </p>
    </div>
  )
};

export default useroutput;