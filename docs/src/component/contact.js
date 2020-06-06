import React from "react";
import PropTypes from "prop-types";
import email from "../img/emailIcon.png";
import phone from "../img/phoneIcon.png";
export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				<div className="messageSection">
				<form id="message"
					className={this.props.shake}
					action="https://formspree.io/example@email.com"
					method="POST">
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-10 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Name"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-10 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-10 mx-auto">
								<input
									type="subject"
									name="_subject"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Subject"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-10 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Write your message..."
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-10 mx-auto">
							<button
							id="submit"
								type="submit"
								className="btn btn-primary mb-2 hidden">
								Submit
							</button>
						</div>
					</div>
				</form>
				</div>
				<div className="row mt-8" id="aboutBubbles">
					<div
						className={
							"col-6 col-sm-6 col-md-12 " + this.props.fadeInRightt
						}>
						<img src={email} alt=""id="emailIcon" />
						<div className="contactInfo">Email</div>
						<div className="contactInfoSub">maryleddy1@gmail.com</div>
					</div>
				
					<div
						className={
							"col-6 col-sm-6 col-md-12 " + this.props.fadeInRight
						}>
						<img src={phone} alt=""id="phoneIcon" />
						<div className="contactInfo">Phone Number</div>
						<div className="contactInfoSub">(985)778-5616</div>
					</div>
				</div>
			</div >
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};