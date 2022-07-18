import React from "react";
import Pic from "../../images/Portrait.jpg";
// import "./aboutMe.css";
// TO DO: CSS



function aboutMe() {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1>Alex Running</h1>
                        <h1>Software Engineer</h1>
                    </div>
                    <div>
                        <div>
                            <p>
                                Hello and thank you for visiting my portfolio page. I am Alex and I am a social worker that has pivoted into being a full stack developer. My passions are front and backend work, as well as CSS. Currently I am fluent in HTML, CSS, JavScript, ReactJS as well as familiar with MySql, MongoDb,Mongoose,Sequelize,Handlebars, and Node.js.
                            </p>
                            <br/>
                            <p>
                                I went to school at UW- River Falls where I graduated with a Bachelor's Degree in Social Work. While I was licensed I coordinated health care for people who were 65 years or older. I coordinated multiple teams to facilitate my client's care. My hobbies include kayaking, traveling with my family and watching anime.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img alt="profile picture" id="hero-picture" src={Pic}/>
                        {/* </div>
                            <a>
                                <img></img>
                            </a>
                            <a>
                                <img></img>
                            </a>
                        </div> 
                        
                        TO DO:add github/linkedin info here?*/}
                    </div>
                </div>
    )
}

export default aboutMe;