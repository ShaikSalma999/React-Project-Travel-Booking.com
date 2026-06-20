//import React from 'react'
import { useParams } from 'react-router-dom'

export default function Packagedetails() {
    const {id} = useParams();
  return (
    <div>
      <h2>Package Details</h2>
      <h3>Selected Package ID : {id}</h3>
    </div>
  )
}
