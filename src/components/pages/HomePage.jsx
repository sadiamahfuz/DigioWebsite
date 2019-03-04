import React from 'react';
import { pageStyle } from '../styles/commonStyles';
import Typing from 'react-typing-animation';
import Footer from '../Footer';

const HomePage = (props) => {
	const homePageText = "Lorem ipsum dolor sit amet, an iusto incorrupte ius, putent incorrupte mea eu, ne reque dissentiet vix. \
	Ei hinc nihil delectus quo, cum at malis dicat intellegebat, dicta aperiam accumsan at nec. \
	Tractatos ocurreret ex eum. Sed idque postea postulant ut. Velit commune duo cu, pro lorem cetero temporibus eu. \
	Utinam civibus voluptua id per. \
	Aliquip meliore ex vix, ex nusquam epicurei liberavisse est. \
	Pro cu vero nullam praesent, vim in fabulas nonumes apeirian, in vel dicta phaedrum. \
	Habemus corpora reprimique ad sit, mel ut minim sadipscing, vitae iudicabit eos eu. \
	Inani omnium quo in, et quem congue vel."

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
		</div>
		<Footer />
		</div>
	);
};

export default HomePage;
