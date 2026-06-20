//import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to = "/">Home ||</Link>
        <Link to = "/about">About ||</Link>
        <Link to = "/packages">Packages ||</Link>
        <Link to = "/contact">Contact ||</Link>
        <Link to = "/profile">Profile ||</Link>
        <Link to = "/services">Services </Link>
      </nav>
    </div>
  )
}
