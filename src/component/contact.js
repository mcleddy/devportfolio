import React from "react";
import PropTypes from "prop-types";
import email from "../img/emailIcon.png";
import phone from "../img/phoneIcon.png";
export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<div className="row">
					<div className="col-sm-12">
				<h1 id="contact" className={"contact-title" + this.props.fadeInLeft}>
					Contact
				</h1>
				</div>
				<div className="col-sm-3 mx-auto text-center" id="aboutBubbles">					
						<div className={
						 + this.props.fadeInRightt
						}>
						<img src={email} alt="" id="emailIcon"/>
						<div className="contactInfo">Email</div>
						<div className="contactInfoSub">maryleddy1@gmail.com</div>
					</div>
					
					<div
						className={
						 + this.props.fadeInRight
						}>
						<img src={phone} alt="" id="phoneIcon" />
						<div className="contactInfo">Phone Number</div>
						<div className="contactInfoSub">(985)778-5616</div>
					</div>
				</div>
				<div className="col-sm-9">
					<form id="message"
						className={this.props.shake}
						action="https://formspree.io/example@email.com"
						method="POST">
						<div className="form-group">
									<input
										type="text"
										name="name"
										className="form-control form-control-lg"
										id="name"
										placeholder="Name"
									/>
								</div>
						<div className="form-group hidden">							
									<input
										type="email"
										name="_replyto"
										className="form-control form-control-lg"
										id="exampleFormControlInput1"
										placeholder="Your email"
									/>							
							</div>
						<div className="form-group hidden">
									<input
										type="subject"
										name="_subject"
										className="form-control form-control-lg"
										id="exampleFormControlInput1"
										placeholder="Subject"
									/>
								</div>
						<div className="form-group hiddenRight">
									<textarea
										name="message"
										className="form-control form-control-lg"
										id="exampleFormControlTextarea1"
										rows="3"
										placeholder="Write your message..."
									/>
								</div>
								<button
									id="submit"
									type="submit"
									className="btn btn-primary mb-2 hidden">
									Submit
							</button>
					</form>
				</div>
				</div>
			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};