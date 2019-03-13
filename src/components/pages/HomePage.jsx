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

	style = {
		fontWeight: 300,
		fontSize: 24,
		maxWidth: 800
	};

	smallTextStyle = {
		fontWeight: 300,
		fontSize: 20,
		maxWidth: 800
	};

	imageStyle = {
		maxWidth: 400,
		marginTop: 10
	};

	messageStyle = {
		display: 'flex',
		flexDirection: 'column'
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
						<p style={this.style}> We are a
							<strong><i> Creative Digital Agency </i></strong>
							and we offer services ranging from
							<strong><i> Digital Marketing </i></strong>
							to
							<strong><i> Web  </i></strong>
							and
							<strong><i> Application Development </i></strong>
							and
							<strong><i> Hardware Prototyping</i></strong>.
						</p>
						<p style={this.smallTextStyle}> We are passionate about meeting your digital needs so you can focus on the things that are important to you. </p>
						<p style={this.smallTextStyle}> Get in touch to <strong> find out more</strong>, or place your <strong>first order</strong>.</p>
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
