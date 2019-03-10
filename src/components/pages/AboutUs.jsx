import React from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';


const AboutUs = (props) => {
	return (
		<div className='AboutUs' style={pageStyle}>
			<PageTitle title='Tag line should go here' />
			<p> Something about our vision </p>
			<PageTitle title='Who We Are' />
			<p> Something about the team </p>
			<PageTitle title='Our Values' />
			<p> List of values </p>
		</div>
	);
};

export default AboutUs;
