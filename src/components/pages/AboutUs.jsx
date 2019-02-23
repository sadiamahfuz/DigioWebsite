import React from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';


const AboutUs = (props) => {
	return (
		<div className='AboutUs' style={pageStyle}>
			<PageTitle title='Tag line should go here' />
			<p> History and values </p>
		</div>
	);
};

export default AboutUs;
