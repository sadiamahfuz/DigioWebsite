import React from 'react';
import { pageStyle } from '../styles/commonStyles';
import Typing from 'react-typing-animation';
import Button from '@material-ui/core/Button';
import image from '../../images/homePageImage.jpg';

const Image = (props) => {
	const imageStyle = {
		maxWidth: '100%',
		marginTop: 10
	};

  return (
    <div>
      <img src={image} alt="anImage" style={imageStyle}/>
    </div>
  );
};

const contactUsClicked = () => {
	console.log("clicked");
};

const HomePage = (props) => {
	// eslint-disable-next-line
	const homePageText = "We are a creative digital agency based in London, and are commited to helping you with your projects so you can focus on the things that are important to you. \
	We have expertise in everything digital from branding and marketing to product development (software & hardware). \
	We specialise in:Digital branding & marketing content development (including digital strategy). - Digital product development (software and hardware) (i.e websites, apps, IoT devices etc).\
	Please get it touch to find out more and how we can help!"

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
