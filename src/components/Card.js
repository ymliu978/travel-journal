import React from "react"

export default function Card(props) {  
    return (
        <div className="card--container">
            <div className="card">
                <div className="card--left">
                    <img src={props.coverImg} className="card--image" />
                </div>
                <div className="card--right">
                    <div className="card--right--location">
                        <img src="https://img.icons8.com/material-rounded/96/fa314a/marker.png" className="card--pin" />
                        <span className="card--country">{props.location}</span>
                    </div>
                    <div className="card-right--details">
                        <p className="card--title">{props.title}</p>
                        <p className="card--date">{props.date}</p>
                        <p className="card-description">{props.description}</p>
                    </div> 
                </div>
            </div>
        </div>
        
    )
}