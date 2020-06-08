import React from "react";
import Background from "./background.js";
import About from "./about.js";
//import Test from "./test.jsx";
import Projects from "./projects.js";
import Contact from "./contact.js";
import Footer from "./footer"


class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.about = React.createRef();
		this.projects = React.createRef();
		this.contact = React.createRef();

		this.scrolling = this.scrolling.bind(this);
	}



	navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<div>
				<Background
					ref={this.navEffect}
					id="my-background"
					aboutRef={this.about}
				/>
				<nav
					id="navbar"
					className="navbar navbar-expand-lg">
					<div className="container">
						<a
						href="/"
                            id="navBtn1"
							className="home-style navbar-brand"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}}>
							Back to Top
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<a
									onClick={() => {
										this.scrolling(this.about);
									}}
									href='#about'
                                    id="navBtn2"
									className="btn-style nav-item nav-link">
									About
								</a>
								<a
									onClick={() => {
										this.scrolling(this.projects);
									}}
									href="#projects"
                                    id="navBtn3"
									className="btn-style nav-item nav-link">
									Projects
								</a>
								<a
									onClick={() => {
										this.scrolling(this.contact);
									}}
									href="#contact"
                                    id="navBtn4"
									className="btn-style nav-item nav-link">
									Contact
								</a>
							</div>
						</div>
					</div>
				</nav>

				<About
					ref={this.about}
					id="about-container"
				/>
				<Projects
					ref={this.projects}
					id="my-projects"

				/>
				<Contact
					ref={this.contact}
					id="my-contact"
				/>
				<Footer/>
			</div>
		);
	}
}

export default Navbar;