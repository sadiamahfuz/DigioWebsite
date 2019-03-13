import React, { Component } from 'react';
import PageTitle from './PageTitle';
import { pageStyle } from '../styles/commonStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as emailjs from 'emailjs-com';

export class ContactUs extends Component  {
	constructor(props) {
	    super(props);
	    this.state = {
				name: '',
				email: '',
				message: ''
			};
	  }

	inputStyle = {
		width: '100%',
		marginTop: 6,
		marginBottom: 16,
		fontSize: 16,
		resize: 'vertical'
	};

	sendEmail = () => {
		var from = this.state.name + ' ' + this.state.email;
		emailjs.send("default_service", "sadia_test", {from_name: from, to_name: 'Digio', subject: 'Digio Message from ' + this.state.name, message_html: this.state.message}, 'user_UtJ632kBpA7OjUUmlZRAs');
		alert("Thank you for your message. We'll get back to you as soon as we can!")
	};

	onNameChange = (e) => {
		this.setState({
			...this.state,
			name: e.target.value
		});
	};

	onEmailChange = (e) => {
		this.setState({
			...this.state,
			email: e.target.value
		});
	};

	onMessageChange = (e) => {
		this.setState({
			...this.state,
			message: e.target.value
		});
	};

	render() {
		return (
			<div className='contactUs' style={pageStyle}>
				<PageTitle title='Contact Us' />
				<TextField variant="outlined" placeholder="Your name" label="Name" style={this.inputStyle} onChange={this.onNameChange}/>
				<TextField variant="outlined" placeholder="Your email" label="Email" style={this.inputStyle} onChange={this.onEmailChange}/>
				<TextField variant="outlined" placeholder="Your message" multiline={true} rows={10} label="Your message" style={this.inputStyle} onChange={this.onMessageChange}/>
				<Button variant="contained" color="primary" style={this.inputStyle} onClick={this.sendEmail}>
					SUBMIT
				</Button>
			</div>
		);
	}
};

export default ContactUs;
