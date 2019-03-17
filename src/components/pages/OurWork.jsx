import React from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';
import WhatWeDoBox from '../WhatWeDoBox';
import webApp from '../../images/webApp.png';
import chatbot from '../../images/chatbot.jpg';
import seoImage from '../../images/seo.jpg';
import data from '../../images/data.jpg';
import contentImage from '../../images/content.jpg';
import social from '../../images/social.png';
import softwareImage from '../../images/software.png';

const webAppText = "We're dedicated working with the latest technologies and trends so that your app is fast, stylish, scalable and works across all browsers and devices. \
		Our current favourite technologies are JavaScript based frameworks such as REACT and Node.js.";

const software = "Whatever your software requirements, we have a solution. We have years of experience in building applications to serve various industries, and our team is expert in the modern langauges and framworks including Java, Python, and C#. Just tell us your requirements and we will deliver the solution that is just right for you."

const machineLearning = "Our team includes experts in the Data Science and Machine Learning. We have expertise in the latest and upcoming machine learning techniques in the industry such as deep learning. Get in touch to talk about your project and requirements.";

const hardwarePrototyping = "Whether it's creating chatbots or programming microcontrollers, we have the expertise to help. We have years of experience with high performance and low level C coding as well as developing rapid proof of concepts like chatbots.";

const ads = "We will deliver high impact and targeted ads on your favourite social media platforms, such as Instagram, Facebook and Snapchat.";

const seo = "We will perform optimisations so that your product and business ranks as high as possible in search engines and widen your reach.";

const contentCreation = "We will develop and implement a tailored content creation strategy so that you can consistently reach the right audience and derive maximum value from your product.";

const whatWeDoBoxStyle = {
	maxWidth: 400
};

const OurWork = () => {
	return (
		<div className='ourWork' style={pageStyle} id="services">
			<PageTitle title='Technology and Product Development' />
			<WhatWeDoBox style={whatWeDoBoxStyle} title="Web & App Development" description={webAppText} image={webApp}/>
			<WhatWeDoBox title="Software Solutions & Applications" description={software} image={softwareImage}/>
			<WhatWeDoBox title="Data Science & Machine Learning Solutions" description={machineLearning} image={data}/>
			<WhatWeDoBox title="Hardware Prototyping" description={hardwarePrototyping} image={chatbot}/>
			<PageTitle title='Digital Marketing' />
            <WhatWeDoBox title="Social Media Ads" description={ads} image={social}/>
            <WhatWeDoBox title="Search Engine Optimisation" description={seo} image={seoImage}/>
            <WhatWeDoBox title="Content Creation" description={contentCreation} image={contentImage}/>
		</div>
	);
};

export default OurWork;
