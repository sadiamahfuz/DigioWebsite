import React from 'react';
import { pageStyle } from '../styles/commonStyles';
import Typing from 'react-typing-animation';

const HomePage = (props) => {
	return (
		<div className='homePage' style={pageStyle}>
			<Typing>
				<h1> Hello, </h1>
				<h1> Welcome to Digio! </h1>
			</Typing>
		</div>
	);
};

export default HomePage;