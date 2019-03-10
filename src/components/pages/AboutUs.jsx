import React from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';

const style = {
	maxWidth: 600
};

const listStyle = {
	margin: 5
};

const WhoWeAreBox = () => {
		return (
			<div className="whoWeAreBox" style={style}>
				<PageTitle title='Who We Are' />
					<p>We are a diverse team of creative individuals who have extensive industry experience in the technology sector. </p>
					<p>We strive to make the world a better place by using technology to solve world problems and bring people together.
					We want to see a world which is happier, more engaging, and where everyone can achieve their dreams.</p>
					<p>Something about founder.</p>
			</div>
		);
};

const OurValuesBox = () => {
	return (
		<div className="ourValuesBox" style={style}>
			<PageTitle title='Our Values' />
				<p>List of Values </p>
				<ol>
  				<li style={listStyle}>Integrity</li>
  				<li style={listStyle}>Innovation</li>
  				<li style={listStyle}>Etc</li>
				</ol>
		</div>
	);
}

const AboutUs = (props) => {
	return (
		<div className='AboutUs' style={pageStyle}>
			<PageTitle title='Tag line should go here' />
			<p> Something about our vision </p>
			<WhoWeAreBox />
			<OurValuesBox />
		</div>
	);
};

export default AboutUs;
