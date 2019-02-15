import React from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';


const OurWork = (props) => {
	return (
		<div className='ourWork' style={pageStyle}>
			<PageTitle title='Our Work' />
			<p> Our Work </p>
		</div>
	);
};

export default OurWork;