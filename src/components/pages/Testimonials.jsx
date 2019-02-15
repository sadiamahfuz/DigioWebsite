import React from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';


const Testimonials = (props) => {
	return (
		<div className='testimonials' style={pageStyle}>
			<PageTitle title='Testimonials' />
			<p> Add stuff here </p>
		</div>
	);
};

export default Testimonials;