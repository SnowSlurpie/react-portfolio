import React, {useEffect, useState} from "react";
// import pdf from "../../assets/resume.pdf";
// import "./navbar.css";

// TO DO: add resume link and do CSS
function Navbar(){
    const [active, setActive] = useState(false);

    useEffect(() => {
      setActive(false)
    },[]);
    
    function mobileMenu(){
        setActive(true)
    };

    function closeMenu(){
        setActive(false)
    };


    return(
        <div>
           <ul>
            <li> <a> Intro</a> </li>
            <li> <a> Portfolio</a> </li>
            <li> <a> Contact</a> </li>
            {/* <li> <a href={Pdf}> Resume</a> </li> */}
           </ul>
        </div>
    )
}

    // BURGER MENU

    <div id="burger" onClick={ active ? closeMenu : mobileMenu} className={ active ? 'active' : null }>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
</div>