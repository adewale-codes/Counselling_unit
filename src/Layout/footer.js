import React from 'react'
import "./styles/footer.css"

export default function Footer() {
    return (
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#"> <i className="fas fa-chevron-right"></i> home </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> services </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> about </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> counsellors </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> book </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> review </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> blogs </a>
                </div>

                <div className="box">
                    <h3>our services</h3>
                    <a href="#"> <i className="fas fa-chevron-right"></i> dental care </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> message therapy </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> cardioloty </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> diagnosis </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> ambulance service </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"> <i className="fas fa-phone"></i> +234-813-2494-814 </a>
                    <a href="#"> <i className="fas fa-phone"></i> +234-813-2494-814 </a>
                    <a href="#"> <i className="fas fa-envelope"></i> adewaleabiola78@gmail.com </a>
                    <a href="#"> <i className="fas fa-envelope"></i> adewaleabiola78@gmail.com </a>
                    <a href="#"> <i className="fas fa-map-marker-alt"></i> Bowen University</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
                    <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
                    <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
                    <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
                    <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
                </div>

            </div>

            <div className="credit"> created by <span>CODESHAM</span> | all rights reserved </div>

        </section>
    )
}