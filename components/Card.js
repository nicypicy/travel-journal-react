import React from "react"

export default function Card(props){
    return(
       
        <div className="card">
        
        <img className = "travel-image" src={props.imageUrl} />
        <div className= "travel-info">
        <div className = "header-info">
        <img className="pin" src = '/images/pin.png' />
        <p className='card--location'>{props.location}</p>
        <a href='{props.googleMapsUrl}'>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <p className="date">{props.startDate} - {props.endDate}</p>
        <p className='description'>{props.description}</p>
        
        
        </div>
        <hr />
        </div>
        
    )
}