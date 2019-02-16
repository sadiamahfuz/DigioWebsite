import React from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';


const AboutUs = (props) => {
	return (
		<div className='AboutUs' style={pageStyle}>
			<PageTitle title='About Us' />
			<p> Add stuff here </p>
		</div>
	);
};

export default AboutUs;