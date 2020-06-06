import React, { Component } from 'react';
import "../styles/resume.css"
import logo from "../img/logo.png";
import phone from "../img/phoneBlack.png";
import github from "../img/githubBlack.png";
import email from "../img/emailBlack.png";
import linkedin from "../img/linkedinBlack.png";
export default class Resume extends Component {
  render() {

    return (
      <div className="resumePage">
        <header id="title">
          <h1>Mary Catherine Leddy</h1>
        </header>
        <section className="main-left">
        <img
							className={"img-fluid " + this.props.fadeIn}
							src={logo}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
                width: 250 + "px",
							}}
						/>
          <div className="objective">
            <h2> Objective</h2>
            <hr></hr>
            <section className="blocks">
              <header>
                <span className="place"> A motivated Web Developer with experience in developing full-stack applications through entire lifecycle. Proficient in database management, debugging, designing, writing, and styling. Believes that applications should balance functionality and artistry. </span>
              </header>
            </section>
          </div>
          <h2> Skills</h2>
          <hr></hr>
          <section className="blocks">
            <ul className="skillsList">
              <h6>JavaScript / React / Node / APIs</h6>
              <h6>Handlebars / Express / j Query</h6>
              <h6>SQL / NoSQL / MongoDB / Ajax</h6>
              <h6>CSS / SaSS / Animations / Charts </h6>
            </ul>
          </section>
        </section>

        <section className="main-block">
          <section id="main">
            <section className="main-block">
              <h2> Work Experience</h2>
             
              <section className="blocks">
                <div className="date">
                  <span>2017</span><span>present</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                  <header>
                    <h3>TEACHER</h3>
                    <span className="place"> THE BEGINNING SCHOOL </span>

                  </header>
                  <div >
                    <h4 className="description">Duties included curriculum writing, teaching students, leading the after-school program. </h4>
                  </div>
                </div>
              </section>
              <section className="blocks">
                <div className="date">
                  <span>2016</span><span>2017</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                  <header>
                    <h3>INSURANCE ADJUSTER</h3>
                    <span className="place">  WORLEY</span>
                  </header>
                  <div>
                   <h4 className="description">Duties included salvage processing, special issues resolution, speaking to customers to resolve any issues with their claims, and training a new group of workers on how to process salvage documents.  </h4>
                  </div>
                </div>
              </section>
              <section className="blocks">
                <div className="date">
                  <span>2014</span><span>2016</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                  <header>
                    <h3>FILE CLERK</h3>
                    <span className="place">JOHNSON, ARTIGUES, & JURISICH L.L.C. </span>
                  </header>
                  <div>
                   <h4 className="description">Duties included the reorganization of the firm’s filing system due to the change in ownership of one of the firm’s principal clients, destruction of documents, closing of files, assistance in document drafting, and correction and retyping of documents.</h4>
                  </div>
                </div>
              </section>
            </section>
            <section className="main-block">
              <h2> EDUCATION</h2>
              <section className="blocks">
                <div className="date">
                  <span>2019</span><span>2020</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                  <header>
                    <h3>POST GRADUATE CERTIFICATION</h3>
                    <span className="place">THE UNIVERSITY OF ARIZONA</span>
                  </header>
                  <div>
                  <h4 className="description">Certification in Full Stack Web Development • 240 Program Hours</h4>
               </div>
                </div>
              </section>
              <section className="blocks">
                <div className="date">
                  <span>2012</span><span>2016</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                  <header>
                    <h3>BACHELOR OF ARTS</h3>
                    <span className="place">NORTHWESTERN STATE UNIIVERSITY</span>
                  </header>
                  <div>
                  <h4 className="description">Liberal Arts Degree with a focus in International Relations and Education • 3.8 GPA</h4>
                  </div>
                </div>
              </section>
            </section>

            <section className="main-block concise">
              <h2>VOLUNTEER Experience </h2>
             <div className="VE1">
              <section className="blocks">
                <div className="date">
                  2020
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                  <header>
                    <h3>THE BEGINNING SCHOOL WEBSITE</h3>
                  </header>
                  <div>This is the official website for a preschool in Tucson that provides resources for the parents of students or potential students. This website contains teacher profiles, a way to contact the administratios, downloadable documents, as well as course calendar that the administration can update with events and announcements.   </div>
                </div>
              </section>
              <section className="blocks">
                <div className="date">
                  2020
                </div> 
                <div className="decorator">
                </div>
                <div className="details">
                  <header>
                    <h3>POST ACEDEMIC CAREERS (PAC) WEBSITE</h3>
                         </header>
                  <div>This is a website built for an organization at The University of Arizona. The site is used to coordinate meetings, distribute resources, and provide information about the organization. </div>
                </div>
              </section>
              </div>
              <div className="VE2">
              <section className="blocks">
                <div className="date">
                  2019
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                  <header>
                    <h3>Profesional Website for PhD Candidate</h3>
                  </header>
                  <div>This is a site created as a resource and useful tool for those working in academia. It allows visitors to navigate though the person's research and CV so that they can connect with other professionals and provide information to their students.   </div>
                </div>
              </section>
              <section className="blocks">
                <div className="date">
                </div>
              </section>
              </div>
            </section>
            </section>
            <div className="bottom">
              <div className="bottomItem">
              <img
							className={"img-fluid " + this.props.fadeIn}
							src={email}
							alt=""
							style={{
								borderRadius: 5 + "%",
								height: 100 + "px",
                width: 100+ "px",
							}}
						/>
                <h5>maryleddy1@gmail.com</h5>
                </div>
                <div className="bottomItem">
              <img
							className={"img-fluid " + this.props.fadeIn}
							src={github}
							alt=""
							style={{
								borderRadius: 5 + "%",
								height: 100 + "px",
                width: 100+ "px",
							}}
						/>
                <h5>mcleddy</h5>
                </div>
                <div className="bottomItem">
              <img
							className={"img-fluid " + this.props.fadeIn}
							src={phone}
							alt=""
							style={{
								borderRadius: 5 + "%",
								height: 100 + "px",
                width: 100+ "px",
							}}
						/>
                <h5>(985)778-5616</h5>
                </div>
                <div className="bottomItem">
              <img
							className={"img-fluid " + this.props.fadeIn}
							src={linkedin}
							alt=""
							style={{
								borderRadius: 5 + "%",
								height: 100 + "px",
                width: 100+ "px",
							}}
						/>
                <h5>in/mcleddy</h5>
                </div>
              </div> 
        </section>
      </div>
    );
  }
}