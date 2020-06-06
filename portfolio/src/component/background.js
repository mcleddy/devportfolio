import React from "react";
import PropTypes from "prop-types";
import gif from "../img/gif.gif";
import WOW from "wowjs";
import Typewriter from 'typewriter-effect';

export default class Background extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <div id="my-background" className="background">
                <img src={gif} className="gif" alt=""></img>

                <div className="top-container flex">  <Typewriter
                    options={{
                        strings: ['Hello! I am Mary Leddy', 'I am a Full-Stack Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                    {/* offset can be cahnged in node modules wowjs default file */}
                    <button
                        className={"work-button " + this.props.bounceIn}
                        data-wow-offset="0"
                        onClick={() => {
                            let node = document.getElementById(
                                this.props.aboutRef.current.props.id
                            );
                            window.scrollTo({
                                top: node.offsetTop,
                                behavior: "smooth"
                            });
                        }}>
                        View my work
					</button>
                </div>
            </div>
        );
    }
}

Background.propTypes = {
    aboutRef: PropTypes.object,
    bounceIn: PropTypes.string
};
