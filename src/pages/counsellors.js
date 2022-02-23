import React from 'react'
import "./styles/counsellors.css"
import doc1 from "./image/doc-1.jpg"
import doc2 from "./image/doc-2.jpg"
import doc3 from "./image/doc-3.jpg"
import doc4 from "./image/doc-4.jpg"
import doc5 from "./image/doc-5.jpg"
import doc6 from "./image/doc-6.jpg"

export default function Counsellors() {
    return (
        <section className="counsellors" id="counsellors">

            <h1 className="heading"> our <span>counsellors</span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={doc1} alt="" />
                    <h3>john deo</h3>
                    <span>head counsellor</span>
                    <div class Name="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc2} alt="" />
                    <h3>john deo</h3>
                    <span>main counsellor</span>
                    <div className="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc3} alt="" />
                    <h3>john deo</h3>
                    <span>professional counsellor</span>
                    <div className="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc4} alt="" />
                    <h3>john deo</h3>
                    <span>expert counsellor</span>
                    <div className="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc5} alt="" />
                    <h3>john deo</h3>
                    <span>expert counsellor</span>
                    <div className="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc6} alt="" />
                    <h3>john deo</h3>
                    <span>expert counsellor</span>
                    <div className="share">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                    </div>
                </div>

            </div>

    </section>

    )
}