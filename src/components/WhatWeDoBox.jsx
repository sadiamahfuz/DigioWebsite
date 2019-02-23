import React from 'react';

const style = {
  overflow: 'auto',
  height: 'inherit',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 20
};

const imageStyle = {
  	float: 'right',
  	marginRight: 10,
  	height: 200,
  	width: 300,
  	alignSelf: 'center'
};

const Description = () => {
  return (
    <div className="description">
      <h5> PRODUCT OR SERVICE NAME </h5>
      <p> A short description </p>
    </div>
  );
};

const Image = () => {
  return (
    <div>
      <img src="https://placeimg.com/640/480/any" style={imageStyle} />
    </div>
  );
};

const WhatWeDoBox = () => {
  return (
    <div className="whatWeDoBox" style={style}>
      <Description />
      <Image />
    </div>
  );
}

export default WhatWeDoBox;
