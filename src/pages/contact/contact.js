import React from "react";
import "./contact.css";

function Contact() {
    function clickMe() {
        window.open('mailto: alexjrunning@gmail.com', '_blank')
}
    return (
        <div className="contact">
            <div id="contact-container">
                <div id="contact-title-container">
                    <h1 id="contact">Please</h1>
                    <h1 className="project-title"> reach out!</h1>
             </div>
                    <div id="contact-me">
                        <p id="contact-me">
                            Please reach out to me if you would like to work together or even if you would like to network.
                        </p>
                    </div>
                <button onClick={clickMe} id="contact-button">Drop a Line!</button>
            </div>
        </div>
    );
}
export default Contact;