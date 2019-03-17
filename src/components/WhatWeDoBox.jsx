import React from 'react';
import { Breakpoint } from 'react-socks';

const descriptionStyle = {
    display: 'flex',
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: 300,
    fontSize: 18,
    maxWidth: 800
};

const descriptionStyleSmall = {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 300,
    fontSize: 18
};

const imageDivStyleWide = {
  	float: 'right',
    padding: 20
};

const imageStyle = {
  	maxWidth: 350
};

const titleStyle = {
    fontSize: 20,
    fontWeight: 700
};

const Title = (props) => {
  return (
    <h1 style={titleStyle}> {props.title} </h1>
  );
};

const Description = (props) => {
  return (
      <p> {props.text} </p>
  );
};

const Image = (props) => {
  return (
    <div style={props.style}>
      <img src={props.image} alt="anImage" style={imageStyle} />
    </div>
  );
};

const WhatWeDoBox = (props) => {
  return (
    <div className="whatWeDoBox" style={props.styles}>
      <Title title={props.title} />
      <Breakpoint medium up>
        <div className="description" style={descriptionStyle}>
          <Description text={props.description}/>
          <Image style={imageDivStyleWide} image={props.image}/>
        </div>
      </Breakpoint>
      <Breakpoint small only>
        <div className="descriptionSmall" style={descriptionStyleSmall}>
          <Image image={props.image}/>
          <Description text={props.description}/>
        </div>
      </Breakpoint>
    </div>
  );
}

export default WhatWeDoBox;
