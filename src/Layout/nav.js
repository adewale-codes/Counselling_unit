import React from 'react'
import { Link } from "react-router-dom"
import "./styles/nav.css"

export default function Nav() {
    return (
        <nav className="navbar">
            <Link to="/">Homepage</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About us</Link>
            <Link to="/counsellors">Counsellors</Link>
            <Link to="/book">Book</Link>
            <Link to="/review">Review</Link>
            <Link to="/blogs">Blogs</Link>
        </nav>
    )
}