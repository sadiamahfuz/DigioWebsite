import React from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';
import WhatWeDoBox from '../WhatWeDoBox';
import Footer from '../Footer';


const OurWork = (props) => {
	return (
<div>
		<div className='ourWork' style={pageStyle}>
			<PageTitle title='What We Do' />
			<p> Lorem ipsum dolor sit amet, an iusto incorrupte ius, putent incorrupte mea eu, ne reque dissentiet vix. Ei hinc nihil delectus quo, cum at malis dicat intellegebat, dicta aperiam accumsan at nec. Tractatos ocurreret ex eum. Sed idque postea postulant ut. Velit commune duo cu, pro lorem cetero temporibus eu. </p>
			<WhatWeDoBox />
			<WhatWeDoBox />
			<WhatWeDoBox />
			<WhatWeDoBox />
		</div>
		</div>
	);
};

export default OurWork;
