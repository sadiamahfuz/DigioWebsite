import React from 'react';

const style = {
  overflow: 'auto',
  height: 'inherit',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 20
};

const imageDivStyle = {
  	float: 'right',
  	marginRight: 10,
  	alignSelf: 'center',
    justifyContent: 'center'
};

const imageStyle = {
  	height: 200,
  	width: 300
};

const Description = () => {
  const homePageText = "Lorem ipsum dolor sit amet, an iusto incorrupte ius, putent incorrupte mea eu, ne reque dissentiet vix. \
	Ei hinc nihil delectus quo, cum at malis dicat intellegebat, dicta aperiam accumsan at nec. \
	Tractatos ocurreret ex eum. Sed idque postea postulant ut. Velit commune duo cu, pro lorem cetero temporibus eu. \
	Utinam civibus voluptua id per. \
	Aliquip meliore ex vix, ex nusquam epicurei liberavisse est. \
	Pro cu vero nullam praesent, vim in fabulas nonumes apeirian, in vel dicta phaedrum. \
	Habemus corpora reprimique ad sit, mel ut minim sadipscing, vitae iudicabit eos eu. \
	Inani omnium quo in, et quem congue vel."
  return (
    <div className="description">
      <h5> PRODUCT OR SERVICE NAME </h5>
      <p> {homePageText} </p>
    </div>
  );
};

const Image = () => {
  return (
    <div style={imageDivStyle}>
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
