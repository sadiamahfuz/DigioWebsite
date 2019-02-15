import React from 'react';
import { pageStyle } from '../styles/commonStyles';

const HomePage = (props) => {
	return (
		<div className='homePage' style={pageStyle}>
			<h1> Hello, </h1>
			<h1> Welcome to Digio! </h1>
		</div>
	);
};

export default HomePage;