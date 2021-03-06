import React, { Component } from 'react';
import { pageStyle } from '../styles/commonStyles';
import Button from '@material-ui/core/Button';
import image from '../../images/homePageImage.jpg';
import Image from '../Image';
import { Link } from "react-scroll";

export class HomePage extends Component {
	style = {
		fontWeight: 300,
		fontSize: 20
	};

	imageStyle = {
		maxWidth: 1000,
		marginTop: 10,
		width: '100%'
	};

	messageStyle = {
		display: 'flex',
		flexDirection: 'column'
	}

	render() {
		return (
				<div className='homePage' style={pageStyle} id="home">
						<h1> Hello, </h1>
						<h1> Welcome to Digio! </h1>
					<div style={this.messageStyle}>
						<p style={this.style}> We are a
							<strong><i> Creative Digital Agency </i></strong>
							and we offer services ranging from
							<strong><i> Digital Marketing </i></strong>
							to
							<strong><i> Web  </i></strong>
							&
							<strong><i> Application Development </i></strong>
							&
							<strong><i> Hardware Prototyping</i></strong>.
						</p>
						<p style={this.style}> We are passionate about meeting your digital needs so you can focus on the things that are important to you. </p>
						<p style={this.style}> Get in touch to <strong> find out more</strong>, or place your <strong>first order</strong>.</p>
					</div>
					<Link to={"contact"} duration={500} offset={-140} smooth={true}>
						<Button variant="contained" color="primary">
	      			CONTACT US
	    			</Button>
					</Link>
					<Image image={image} style={this.imageStyle} />
				</div>
		);
	}

};

export default HomePage;
