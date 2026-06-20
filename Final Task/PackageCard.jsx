import React from 'react'
import {Link} from "react-router-dom"

export default function PackageCard({trip}) {
  return (
    <div className="card">
      <img src ={trip.image} alt ={trip.title}/>
      <h3>{trip.title}</h3>
      <p>{trip.price}</p>
      <Link to ={`/packages/${trip.id}`}>
      View Details
      </Link>
    </div>
  )
}
