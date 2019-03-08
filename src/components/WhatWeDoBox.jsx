import React from 'react';
import { Breakpoint } from 'react-socks';

const descriptionStyle = {
  overflow: 'auto',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 20,
  marginLeft: 20
};

const descriptionStyleSmall = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const imageDivStyleWide = {
  	float: 'right',
  	marginRight: 10,
    padding: 20
};

const imageDivStyleSmall = {
    padding: 20
};

const imageStyle = {
  	height: 200,
  	width: 300
};

const Title = (props) => {
  return (
    <h5> {props.title} </h5>
  );
}

const Description = (props) => {
  return (
      <p> {props.text} </p>
  );
};

const Image = (props) => {
  return (
    <div style={props.style}>
      <img src="https://placeimg.com/640/480/any" alt="anImage" style={imageStyle} />
    </div>
  );
};

const WhatWeDoBox = () => {
  // eslint-disable-next-line
  const homePageText = "Lorem ipsum dolor sit amet, an iusto incorrupte ius, putent incorrupte mea eu, ne reque dissentiet vix. \
	Ei hinc nihil delectus quo, cum at malis dicat intellegebat, dicta aperiam accumsan at nec. \
	Tractatos ocurreret ex eum. Sed idque postea postulant ut. Velit commune duo cu, pro lorem cetero temporibus eu. \
	Utinam civibus voluptua id per. \
	Aliquip meliore ex vix, ex nusquam epicurei liberavisse est. \
	Pro cu vero nullam praesent, vim in fabulas nonumes apeirian, in vel dicta phaedrum. \
	Habemus corpora reprimique ad sit, mel ut minim sadipscing, vitae iudicabit eos eu. \
	Inani omnium quo in, et quem congue vel."
  return (
    <div className="whatWeDoBox">
      <Title title="PRODUCT OR SERVICE NAME" />
      <Breakpoint medium up>
        <div className="description" style={descriptionStyle}>
          <Description text={homePageText}/>
          <Image style={imageDivStyleWide}/>
        </div>
      </Breakpoint>
      <Breakpoint small only>
        <div className="descriptionSmall" style={descriptionStyleSmall}>
          <Image style={imageDivStyleSmall}/>
          <Description text={homePageText}/>
        </div>
      </Breakpoint>
    </div>
  );
}

export default WhatWeDoBox;
