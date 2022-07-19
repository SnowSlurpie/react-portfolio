import React from "react";
import "./portfolio.css";
import Pawnder from '../../assets/images/pawnder.png';
import RunBuddy from '../../assets/images/run-buddy.png';
import Spirit from '../../assets/images/spirit.jpg';
import BuddyByDaylight from '../../assets/images/artist.jpg';
import Card from "../../components/card";


function Project() {
    const myProjects = [
        {
            id: 'pawnder',
            title: 'Pawnder!',
            image: Pawnder,
            description: 'Application that allows users to meet other like-minded people and connect with them and their dog. You create a profile, then you can search for other users and connect with them.',
            repo: "https://github.com/SnowSlurpie/woof-call"
        },
        {
            id: 'buddy_by_daylight',
            title: 'Buddy By Daylight',
            image: BuddyByDaylight,
            description: 'An application I am developing that is intended to be a companion for both casual and veteran Dead By Daylight players. The application will fetch your game stats via STEAM and let you see progress on achievements, among other things.',
            repo: "https://github.com/SnowSlurpie/buddy_by_daylight"
        },
        {
            id: 'runBuddy',
            title: 'Run Buddy',
            image: RunBuddy,
            description: 'A website for people to further their exercise ambitions by connecting with trainers',
            repo: "https://github.com/SnowSlurpie/run_buddy"
        },
        {
            id: 'spirit',
            title: 'The Nasa Spirit',
            image: Spirit,
            description: 'This project is a website that allows the end user to obtain the current weather for a location while also retrieving data related to the moon phase and how clear the sky is at that given moment. Uses Visual Crossing\'s Weather API and NASA\'s Astronomy Picture of the Day API.',
            repo: "https://github.com/aubree-alexander/the-nasa-spirit"
        },
    ]

    return(
        <div id="project">
            <div id="project-container">
                <div id="project-title-container">
                    <h1 id="project-header">Projects </h1>
                    <h1 id="project-title">so far...</h1>
                </div>
                <div id="grid-container">
                    {myProjects.map(project => {
                        return <Card
                            id={project.id}
                            background={project.image}
                            title = {project.title}
                            description = {project.description}
                            repo = {project.repo}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project;