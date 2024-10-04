import React from "react"
import Navbar from "/components/Navbar.js"
import Card from "/components/Card.js"
import data from "/data.js"

export default function App(){
    const places = data.map(place => {
        return (<Card 
        {...place}/>
        )
    })
    return(
        <div>
        <Navbar />
        
        {places} 
        
        </div>
    )
}