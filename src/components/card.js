import React from "react";
import './card.css';

export default function Card(props){
    return(
        <div className="uk-card uk-card-default new" id={props.id} key={props.id}>
            <div className="uk-card-media-top images" style={{backgroundImage: `url(${props.background})`}}>
            </div>
            <div className="uk-card-body card-container">
                <div className="card-info-container">
                    <div className="card-info">
                        <h3 className="uk-card-title card-title">{props.title}</h3>
                        <p className="card-description">{props.description}</p>
                    </div>
                    <div className="card-footer">
                        { props.website ? <p className="read-more"><a className="read-more links"  target='_blank' rel='noreferrer' href={props.repo}>GitHub Repo</a> </p> : <p className="read-more"><a className="read-more links"  target='_blank' rel='noreferrer' href={props.repo}>GitHub Repo</a></p> }
                    </div>
                </div>
            </div>
        </div>
    )
}