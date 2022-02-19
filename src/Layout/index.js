import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./header"
import Footer from "./footer"
import Home from "../pages/home"
import Services from "../pages/services"
import About from "../pages/about"
import Counsellors from "../pages/counsellors"
import Book from "../pages/book"
import Review from "../pages/review"
import Blogs from "../pages/blogs"
import "./styles/layout.css"

export default function Layout() {
    return (
        <>
            <Header />
                <div className='page-margin-top'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/counsellors" element={<Counsellors />} />
                        <Route path="/book" element={<Book />} />
                        <Route path="/review" element={<Review />} />
                        <Route path="/blogs" element={<Blogs />} />
                    </Routes>
                </div>
            <Footer />
        </>
    )
}