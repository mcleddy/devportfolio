import React from "react";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid  mt-5">
					<div className=" project-container container  pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"CreationsImg col-12 m-l-10 col-sm-12 col-md-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Creations in Clay Eccomerce Site</h2>
									</div>
									<div>
										<a
											href="https://fast-journey-69398.herokuapp.com/"
											id="CreationsImg"
											className="project-button">
											Deployed Site
										</a>
									</div>
								</div>
							</div>
							<div
								className={
									"MotelImg col-12 col-sm-12 col-md-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Copper Blues Motel</h2>
									</div>
									<div>
										<a
											href="https://stormy-dusk-23048.herokuapp.com/"
											id="agua-button"
											className="project-button">
											Deployed Site
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row my-5">
							<div
								className={
									"PACImg col-12 col-sm-12 col-md-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Post Acedemic Careers Organization Site</h2>
									</div>
									<div>
										<a
											href="https://pacuofa.herokuapp.com/"
											id="todo-button"
											className="project-button">
											Deployed Site
										</a>
									</div>

								</div>
							</div>


							<div
								className={
									"MushroomImg col-12 col-sm-12 col-md-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Mushroom: Child Development Tracker</h2>
									</div>
									<div>
										<a
											href="https://mushroombabytracker.herokuapp.com/"
											id="agua-button"
											className="project-button"
										>
											Deployed Site
										</a>
									</div>
								</div>
							</div>

						</div>

						<div className="row my-5">
							<div
								className={
									"DnDImg col-12 col-sm-12 col-md-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>DnD Story Tracker Site</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
										>
											Deployed Site
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"VolunTourImg col-12 col-sm-12 col-md-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>VolunTour: Volunteer Organization App</h2>
									</div>
									<div>
										<a
											id="todo-button"
											href="https://afternoon-thicket-88370.herokuapp.com/"
											className="project-button">
											Deployed Site
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment >
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};