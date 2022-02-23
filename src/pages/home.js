import React from 'react'
import "./styles/home.css"
import { ReactComponent as Homeimg } from './image/home-img.svg'

export default function Home() {
    return (
    <section className="home" id="home">

        <div class="image">
            <div>
                <Homeimg />
            </div>
        </div>

        <div class="content">
            <h3>stay safe, stay healthy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
            <a href="#" class="btn"> contact us <span class="fas fa-chevron-right"></span> </a>
        </div>
        <div class="icons">
            <i class="fas fa-user-md"></i>
            <h3>20+</h3>
            <p>counsellors at work</p>
        </div>

        <div className="icons">
            <i className="fas fa-users"></i>
            <h3>4000+</h3>
            <p>satisfied patients</p>
        </div>

        <div className="icons">
            <i className="fas fa-procedures"></i>
            <h3>50+</h3>
            <p>good facility</p>
        </div>

        <div className="icons">
            <i className="fas fa-hospital"></i>
            <h3>20+</h3>
            <p>available counsellors</p>
        </div>

    </section>
    
    )
}