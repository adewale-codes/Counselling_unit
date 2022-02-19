import React from 'react'
import Nav from "./nav"
import {Link} from "react-router-dom"
import "./styles/header.css"

export default function Header() {
    return(
      <header className="header">
          <Link to="/" className="logo">Codesham</Link>
          <Nav />
      </header>  
    )
}