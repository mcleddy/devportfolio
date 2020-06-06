import React from "react";
import resume from "../img/resumeIcon.jpg";
import github from "../img/githubIcon.png";
import linkedin from "../img/linkedinIcon.png";
import profile from "../img/profile.png";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>

				<div className="row" id="aboutSection2" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-4 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={profile}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						
						<p className={"mytext pt-2 " + this.props.fadeIn} id="aboutMe">

						<b>Mary Leddy</b> is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-8 " +
							this.props.tada
						}>
			<svg id="tagi" x="0px" y="0px" width="100%" height="400px" viewBox="0 0 920 324">
    <text transform="matrix(1 0 0 1 497.4292 293.7129)" class="st33 st0">MONGO</text>
    <text transform="matrix(1 0 0 1 727.8999 191.9316)" class="st33 st20">API</text>
    <text id="XMLID_2_" transform="matrix(1 0 0 1 433.0854 82.7407)" class="st33 st8">NODE</text>
    <text transform="matrix(1 0 0 1 188.187 144.3555)" class="st33 st17 st22">REACT</text>
    <text transform="matrix(1 0 0 1 380.8301 145.1353)" class="st33 st29">J-QUERY</text>
    <text transform="matrix(1 0 0 1 378.8799 54.6626)" class="st34 st28 st6">SASS</text>
    <text transform="matrix(1 0 0 1 247.0718 191.1514)" class="st34 st28 st18">MOCHA</text>
    <text transform="matrix(1 0 0 1 0 129.9268)" class="st34 st28 st30">BOOTSTRAP</text>
    <text transform="matrix(1 0 0 1 250.9712 76.1118)" class="st34 st27 st14">INTUITIVE DESIGN</text>
    <text transform="matrix(1 0 0 1 229.9131 169.5225)" class="st34 st27 st25">DEBUGING</text>
    <text transform="matrix(1 0 0 1 472.4722 105.3691)" class="st34 st28 st27">ACCESSIBILE</text>
    <text transform="matrix(1 0 0 1 735.7007 163.4639)" class="st34 st28 st1">RESTful API</text>
    <text transform="matrix(1 0 0 1 128.9111 264.4697)" class="st32 st28 st26">DESIGN AND FUNCTIONALITY</text>
    <text transform="matrix(1 0 0 1 191.3057 102.2393)" class="st32 st28 st24">PHOTOSHOP</text>
    <text transform="matrix(1 0 0 1 318.4351 289.0342)" class="st5 st28 st1">TYPOGRAPHY</text>
    <text transform="matrix(1 0 0 1 740.77 211.4307)" class="st5 st28 st21">DATABASE</text>
    <text transform="matrix(1 0 0 1 683.0542 230.5381)" class="st5 st28 st19">VISUAL STUDIO</text>
    <text transform="matrix(0.9244 0 0 1 632.7485 97.0288)" class="st5 st28 st16">E-COMMERCE</text>
    <text transform="matrix(1 0 0 1 663.5552 139.2856)" class="st5 st28 st3">ANIMATIONS</text>
    <text transform="matrix(1 0 0 1 251.3608 240.4502)" class="st34 st17 st31">MOBILE RESPONSIVE</text>
    <text transform="matrix(1 0 0 1 217.0439 54.2744)" class="st5 st28 st11">FRONT END</text>
    <text transform="matrix(1 0 0 1 119.9526 240.2871)" class="st5 st28 st13">MYSQL</text>
    <text transform="matrix(1 0 0 1 444.0044 34.7744)" class="st5 st17 st4">HANDLEBARS</text>
    <text transform="matrix(1 0 0 1 125.4019 129.147)" class="st5 st28 st15">CSS</text>
    <text transform="matrix(1 0 0 1 350.8022 207.5303)" class="st17 st2">JAVASCRIPT</text>
    <text transform="matrix(1 0 0 1 81.5249 212.6006)" class="st33 st8">CHAI</text>
    <text transform="matrix(1 0 0 1 545.0063 316.7061)" class="st5 st28 st23">NOSQL</text>
    <text transform="matrix(1 0 0 1 638.2075 66.7529)" class="st5 st28 st12">HTML 5</text>
    <text transform="matrix(1 0 0 1 185.8467 282.4043)" class="st5 st28 st10">BACK END</text>
    <text transform="matrix(1 0 0 1 34.1494 150.5947)" class="st5 st28 st7">AJAX</text>
  </svg>
					</div>
				</div>
				<div className="row mt-8" id="aboutBubbles">
					<a			
					href='/resume'		
					className={
							"col-6 col-sm-6 col-md-4 " + this.props.fadeInLeft
						}>
						<img src={resume} alt="" className="aboutIcon" />
						<h4>Resume</h4>
					</a>

					<a
					href="https://github.com/mcleddy"
						className={
							"col-6 col-sm-6 col-md-4 " + this.props.fadeInLeft
						}>
						<img src={github} alt="" className="aboutIcon" />
						<h4>Github</h4>
					</a>

					<a
						href="www.linkedin.com/in/mcleddy"
						className={
							"col-6 col-sm-6 col-md-4 " + this.props.fadeInLeft
						}>
						<img src={linkedin} alt="" className="aboutIcon" />
						<h4>LinkedIn</h4>
					</a>
				
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};