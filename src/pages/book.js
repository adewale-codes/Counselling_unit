import React from 'react'
import "./styles/book.css"

export default function Book() {
    return (
        <section className="book" id="book">

        <h1 className="heading"> <span>book</span> now </h1>    

        <div className="row">

            <div className="image">
                <img src="./image/book-img.svg" alt="" />
            </div>

            <form action="">
                <h3>book appointment</h3>
                <input type="text" placeholder="your name" class="box" />
                <input type="number" placeholder="your number" class="box" />
                <input type="email" placeholder="your email" class="box" />
                <input type="date" class="box" />
                <input type="submit" value="book now" class="btn" />
            </form>

        </div>

    </section>
    )
}