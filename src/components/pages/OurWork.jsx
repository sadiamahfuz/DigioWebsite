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

const webAppText = "We're dedicated to building fast, stylish, scalable websites and applications that work across all browsers and devices. \
		Our current favourite technologies are JavaScript based frameworks such as REACT and Node.js.";

const software = "Whatever your software requirements, we have a solution. We are experts in all the modern langauges including Java, Python, and C#. Just tell us your requirements and we will deliver a solution that is just right for you."

const machineLearning = "We have Data Science and Machine Learning experts who're to date with the latest and greatest in the field, and are active members in the London tech scene. Get in touch to talk about your project and requirements.";

const hardwarePrototyping = "Need to create chatbots, programme microcontrollers or program IoT devices? We have years of experience with high performance and low level C coding as well as developing rapid proof of concepts.";

const ads = "We will deliver high impact and targeted ads on your favourite social media platforms, such as Instagram, Facebook Snapchat and LinkedIn.";

const seo = "We will perform search engine optimisations so that your product and business ranks as high as possible in search results and widen your reach.";

const contentCreation = "We will develop and implement a tailored content creation strategy so that you can consistently reach and appeal to the right audience and derive maximum value.";

const whatWeDoBoxStyle = {
	maxWidth: 400
};

const OurWork = () => {
	return (
		<div className='ourWork' style={pageStyle} id="services">
			<PageTitle title='Technology and Product Development' />
			<WhatWeDoBox style={whatWeDoBoxStyle} title="Web & Mobile Apps" description={webAppText} image={webApp}/>
			<WhatWeDoBox title="Software Applications" description={software} image={softwareImage}/>
			<WhatWeDoBox title="Data Science & Machine Learning" description={machineLearning} image={data}/>
			<WhatWeDoBox title="Hardware Prototyping" description={hardwarePrototyping} image={chatbot}/>
			<PageTitle title='Digital Marketing' />
            <WhatWeDoBox title="Social Media Ads" description={ads} image={social}/>
            <WhatWeDoBox title="SEO" description={seo} image={seoImage}/>
            <WhatWeDoBox title="Content Creation" description={contentCreation} image={contentImage}/>
		</div>
	);
};

export default OurWork;
