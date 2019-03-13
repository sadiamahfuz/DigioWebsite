import React from 'react';

const Image = (props) => {
  const imageStyle = {
    width: '100%',
    maxWidth: 1280,
    marginTop: 10
  };

  console.log(props.imageStyle);
  return (
    <div>
      <img src={props.image} alt="anImage" style={imageStyle}/>
    </div>
  );
};

export default Image;
