import React from 'react'
import "./styles/about.css"
import { ReactComponent as Aboutimg } from './image/about-img.svg'

export default function About() {
    return (
        <section className="about" id="about">

            <h1 className="heading"> <span>about</span> us </h1>

            <div className="row">

                <div className="image">
                    <div>
                        <Aboutimg />
                    </div>
                </div>

                <div className="content">
                    <h3>we take care of your healthy life</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
                    <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                </div>

            </div>

        </section>
    )
}