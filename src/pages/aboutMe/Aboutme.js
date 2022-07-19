import React from "react";
import LinkedIn from "../../assets/images/linkedinlogo.png";
import Github from "../../assets/images/githublogo.png";
import Pic from "../../assets/images/portrait.jpg";
import "./aboutMe.css";
import Typing from "./typewriting"



function Welcome(){
    return(
        <div id="aboutme">
            <div id='aboutMeContainer'>
                <div id="info-container">
                    <div id="title-container">
                    <h1 id="name" className="uk-animation-fade my-title">Alex Running</h1>
                        <Typing />
                    </div>
                    <div key="about" id="about">
                        <div id="paragraph-container" className="uk-animation-fade">
                        <p className="paragraph">
                                Hello and thank you for visiting my portfolio page. I am Alex and I am a social worker that has pivoted into being a full stack developer. My passions are front and backend work as well as CSS. I'm currently able to work in <code className="my-code">HTML, CSS, JavScript, ReactJS</code> and am very familiar with <code className="my-code">MySql, MongoDb,Mongoose,Sequelize,Handlebars, and Node.js</code>.
                            </p>
                        <br/>
                        <p className="paragraph">
                                I went to school at UW- River Falls where I graduated with a Bachelor's Degree in Social Work. While I was licensed I coordinated health care for people who were 65 years or older. I coordinated multiple teams to facilitate my client's care. My hobbies include kayaking, traveling with my family and watching anime.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="my-pics">
                    <img alt="profile pic" id="hero-pic" src={Pic}/>
                    <div id="icon-tags">
                    <a href="https://www.linkedin.com/in/alex-running-2a2a53188" target="_blank">
                            <img alt="linkedin" id="linkedin" src={LinkedIn} className="contact-icons"></img>
                        </a>
                        <a href="https://github.com/SnowSlurpie" target="_blank">
                            <img className="contact-icons" alt="github" id="github" src={Github}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;