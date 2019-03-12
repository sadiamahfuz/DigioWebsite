import React from 'react';
import { pageStyle } from '../styles/commonStyles';
import Typing from 'react-typing-animation';
import Button from '@material-ui/core/Button';

const Image = (props) => {
	const imageStyle = {
		maxWidth: '100%',
		marginTop: 10
	};

  return (
    <div>
      <img src="https://placeimg.com/1280/720/any" alt="anImage" style={imageStyle}/>
    </div>
  );
};

const contactUsClicked = () => {
	console.log("clicked");
};

const HomePage = (props) => {
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
		<div>
			<div className='homePage' style={pageStyle}>
				<Typing>
					<h1> Hello, </h1>
					<h1> Welcome to Digio! </h1>
				</Typing>
				<p>
					{homePageText}
				</p>
				<Button variant="contained" color="primary" onClick={contactUsClicked}>
      		CONTACT US
    		</Button>
				<Image />
			</div>
		</div>
	);
};

export default HomePage;
