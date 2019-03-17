import React from 'react';

const Image = (props) => {

  return (
    <div>
      <img src={props.image} alt="anImage" style={props.style}/>
    </div>
  );
};

export default Image;
