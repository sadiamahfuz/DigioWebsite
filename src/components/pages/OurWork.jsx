import React from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';
import WhatWeDoBox from '../WhatWeDoBox';

const OurWork = (props) => {
	return (
		<div className='ourWork' style={pageStyle} id="services">
			<PageTitle title='Our Services' />
			<p> We offer a range of services. Below are a list of services we offer.  </p>
			<WhatWeDoBox />
			<WhatWeDoBox />
			<WhatWeDoBox />
			<WhatWeDoBox />
		</div>
	);
};

export default OurWork;
