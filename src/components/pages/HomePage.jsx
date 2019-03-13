import React, { Component } from 'react';
import { pageStyle } from '../styles/commonStyles';
import Typing from 'react-typing-animation';
import Button from '@material-ui/core/Button';
import image from '../../images/homePageImage.jpg';
import Image from '../Image';
import { withRouter } from 'react-router-dom';

export class HomePage extends Component {
	// eslint-disable-next-line
	homePageText = "We are a creative digital agency based in London, and are commited to helping you with your projects so you can focus on the things that are important to you. \
	We have expertise in everything digital from branding and marketing to product development (software & hardware). \
	We specialise in:Digital branding & marketing content development (including digital strategy). - Digital product development (software and hardware) (i.e websites, apps, IoT devices etc).\
	Please get it touch to find out more and how we can help!"

	contactUsClicked = () => {
		this.props.history.push("/contactus")
	};

	imageStyle = {
		maxWidth: 400,
		marginTop: 10
	};

	writingBigStyle = {
		fontSize: 20,
		fontWeight: 800,
		fontStyle: 'italic',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 0,
		martinTopBottom: 0
	};

	writingSmallStyle = {
		marginTop: 0,
		martinTopBottom: 0
	};

	messageStyle = {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'flex-end'
	}

	render() {
		return (
			<div>
				<div className='homePage' style={pageStyle}>
					<Typing>
						<h1> Hello, </h1>
						<h1> Welcome to Digio! </h1>
					</Typing>
					<div style={this.messageStyle}>
						<p style={this.writingSmallStyle}>We are a </p>
						<h1 style={this.writingBigStyle}> creative digital agency </h1>
						<p style={this.writingSmallStyle}> and we offer services ranging from </p>
						<h1 style={this.writingBigStyle}> digital marketing </h1>
						<p style={this.writingSmallStyle}> to </p>
						<h1 style={this.writingBigStyle}> web and application development. </h1>
						<p style={this.writingSmallStyle}> We are passionate about meeting your digital needs so you can focus on the things that are important to you. </p>
						<p style={this.writingSmallStyle}> Get in touch to find out more, or place your first order.</p>
					</div>
					<Button variant="contained" color="primary" onClick={this.contactUsClicked}>
	      		CONTACT US
	    		</Button>
					<Image image={image} style={this.imageStyle} />
				</div>
			</div>
		);
	}

};

export default withRouter(HomePage);
