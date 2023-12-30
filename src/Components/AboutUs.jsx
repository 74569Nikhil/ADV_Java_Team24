/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {  Container } from "react-bootstrap";
import video from '../Video/1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import me from '../Components/Slider/nikhil.png';
import logo from '../Components/Slider/google-logo.png';
import Footer from "./Footer";


export function AboutUs() {

    return (
        <>

            <section className="section-white mt-5">
                <div className="container text-center">
                    <h1>About AshirWad</h1>
                    <p>Who are we</p>
                    <Container>
                        <h5>We are a contemporary jewelry destination, offering a diverse array of exquisite pieces that blend traditional
                            and modern styles. With a rich assortment of over 1000 designs, SwarnaRatna is your go-to for handcrafted local
                            gems and globally acclaimed brands. Our pride lies in presenting a meticulously curated selection that caters
                            to every taste. If you can't find what you're looking for, our team is dedicated to sourcing it for you.
                        </h5>
                        <h5>
                            With a legacy spanning three decades, we bring credibility and expertise to meet your unique jewelry desires.
                            Whether you seek a single piece, a collection for a special occasion, or corporate orders, SwarnaRatna is your
                            all-encompassing destination for all things jewelry. Explore the world of SwarnaRatna, where every piece is a
                            timeless celebration of elegance and grace.
                        </h5>
                    </Container>
                </div>
            </section>
            <video src={video} width="100%" height="80%" className="mt-4" autoPlay loop playsInline />
            <section className="section-white mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title">Meet the Founder</h2>
                            <p className="section-subtitle mt-3">Embark on a journey with the visionary behind our brand. Our founder is dedicated to enriching your drinking experience with a curated selection of exceptional flavors.</p>
                        </div>


                        <div className="container">

                            {/* 1st founder */}
                            <section id="about" className="about-section mt-5 mb-3">
                                <div className="row">
                                    <div className="col-lg-4 col-mf-12 col-12">
                                        <div className="about-img">
                                            <img src={me} alt="" className="img-fluid hover-effect" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-12 ps-lg-5 md-5">
                                        <div className="about-text">
                                            <h1>Nikhil Badhe</h1>
                                            <p>Welcome to AshirWad, where beauty meets craftsmanship in the world of exquisite jewelry. I'm Munot Gadale,
                                                the founder of this curated space that celebrates the art of adornment.
                                                My passion for fine jewelry and commitment to quality craftsmanship have come together to create a unique
                                                shopping experience for you.
                                            </p>
                                            <p>Join me on this glittering journey through the world of SwarnaRatna, where each piece tells a story of
                                                artistry, dedication, and timeless beauty. Whether you're looking for the perfect gift or treating
                                                yourself to something special, our commitment to authenticity and elegance ensures you'll find the
                                                perfect piece for every moment.
                                            </p>
                                            <h5>Welcome to AshirWad - Your Destination for Timeless Elegance and Unmatched Craftsmanship.
                                            </h5>
                                            <div className="item-social mt-4">
                                                <a href="https://www.linkedin.com/in/nikhil048/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>

                                                <a href="https://www.instagram.com/nikhilbadhe_1999/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 2nd founder */}
                            <section id="about" className="about-section mt-5 mb-3">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-12 ps-lg-5 md-5">
                                        <div className="about-text">
                                            <h1>Nikhil Badhe</h1>
                                            <p>Welcome to AshirWad, where beauty meets craftsmanship in the world of exquisite jewelry. I'm Munot Gadale,
                                                the founder of this curated space that celebrates the art of adornment.
                                                My passion for fine jewelry and commitment to quality craftsmanship have come together to create a unique
                                                shopping experience for you.
                                            </p>
                                            <p>Join me on this glittering journey through the world of SwarnaRatna, where each piece tells a story of
                                                artistry, dedication, and timeless beauty. Whether you're looking for the perfect gift or treating
                                                yourself to something special, our commitment to authenticity and elegance ensures you'll find the
                                                perfect piece for every moment.
                                            </p>
                                            <h5>Welcome to AshirWad - Your Destination for Timeless Elegance and Unmatched Craftsmanship.
                                            </h5>
                                            <div className="item-social mt-4">
                                                <a href="https://www.linkedin.com/in/nikhil048/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>

                                                <a href="https://www.instagram.com/nikhilbadhe_1999/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-12">
                                        <div className="about-img">
                                            <img src={me} alt="" className="img-fluid hover-effect" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 3rd founder */}
                            <section id="about" className="about-section mt-5 mb-3">
                                <div className="row">
                                    <div className="col-lg-4 col-mf-12 col-12">
                                        <div className="about-img">
                                            <img src={me} alt="" className="img-fluid hover-effect" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-12 ps-lg-5 md-5">
                                        <div className="about-text">
                                            <h1>Nikhil Badhe</h1>
                                            <p>Welcome to AshirWad, where beauty meets craftsmanship in the world of exquisite jewelry. I'm Munot Gadale,
                                                the founder of this curated space that celebrates the art of adornment.
                                                My passion for fine jewelry and commitment to quality craftsmanship have come together to create a unique
                                                shopping experience for you.
                                            </p>
                                            <p>Join me on this glittering journey through the world of SwarnaRatna, where each piece tells a story of
                                                artistry, dedication, and timeless beauty. Whether you're looking for the perfect gift or treating
                                                yourself to something special, our commitment to authenticity and elegance ensures you'll find the
                                                perfect piece for every moment.
                                            </p>
                                            <h5>Welcome to AshirWad - Your Destination for Timeless Elegance and Unmatched Craftsmanship.
                                            </h5>
                                            <div className="item-social mt-4">
                                                <a href="https://www.linkedin.com/in/nikhil048/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>

                                                <a href="https://www.instagram.com/nikhilbadhe_1999/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 4th founder */}
                            <section id="about" className="about-section mt-5 mb-3">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-12 ps-lg-5 md-5">
                                        <div className="about-text">
                                            <h1>Nikhil Badhe</h1>
                                            <p>Welcome to AshirWad, where beauty meets craftsmanship in the world of exquisite jewelry. I'm Munot Gadale,
                                                the founder of this curated space that celebrates the art of adornment.
                                                My passion for fine jewelry and commitment to quality craftsmanship have come together to create a unique
                                                shopping experience for you.
                                            </p>
                                            <p>Join me on this glittering journey through the world of SwarnaRatna, where each piece tells a story of
                                                artistry, dedication, and timeless beauty. Whether you're looking for the perfect gift or treating
                                                yourself to something special, our commitment to authenticity and elegance ensures you'll find the
                                                perfect piece for every moment.
                                            </p>
                                            <h5>Welcome to AshirWad - Your Destination for Timeless Elegance and Unmatched Craftsmanship.
                                            </h5>
                                            <div className="item-social mt-4">
                                                <a href="https://www.linkedin.com/in/nikhil048/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>

                                                <a href="https://www.instagram.com/nikhilbadhe_1999/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-12">
                                        <div className="about-img">
                                            <img src={me} alt="" className="img-fluid hover-effect" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>


                        <section className="google-reviews-section mt-5">
                            <Container>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="google-reviews">
                                        <h3>E-Learning</h3>
                                        <p>Rating: 4.9</p>
                                        <p>327 reviews</p>
                                    </div>
                                    <div>
                                        <img src={logo} alt="Logo" style={{ marginLeft: '10px' }} ></img>
                                    </div>
                                </div>

                                {/* 1st review */}
                                <div className="review-box">
                                    <div className="review-card">
                                        <p className="reviewer">Reviewer: Munot Gadale</p>
                                        <p>Rating: ⭐⭐⭐⭐⭐ (5/5)</p>
                                        <div className="review-content">
                                            I had an absolutely wonderful experience at AshirWad! The variety and craftsmanship of their jewelry are unparalleled. From traditional to modern designs, they have it all. The staff, especially Uma Ma'am, provided exceptional service, guiding me through their extensive collection with patience and expertise.
                                            What sets AshirWad apart is not only the stunning pieces but also their commitment to customer satisfaction. Uma Ma'am went above and beyond to help me find the perfect piece for a special occasion. The quality of their gems and diamonds is outstanding, and the prices are reasonable.
                                            The ambiance of the store is elegant and inviting, making the whole shopping experience enjoyable. I highly recommend SwarnaRatna to anyone looking for high-quality jewelry and a delightful shopping experience. I will definitely be returning for my future jewelry needs. Thank you, SwarnaRatna, for making my jewelry shopping memorable!
                                        </div>
                                    </div>
                                </div>

                                {/* 2nd review */}
                                <div class="review-card">
                                    <p class="reviewer">Reviewer: Mehul Bhole</p>
                                    Rating: ⭐⭐⭐⭐⭐ (5/5)
                                    <p class="review-content">
                                        The jewelry collection at SwarnaRatna is stunning! Found the perfect piece for a special occasion. Excellent service!
                                    </p>
                                </div>


                                {/* 3rd review */}
                                <div class="review-card">
                                    <h4>Google Review</h4>
                                    <div class="rating">
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9734;</span>
                                        <span class="star">&#9734;</span>
                                    </div>
                                    <p class="reviewer">Reviewer:Lalit Zope</p>
                                    Rating: ⭐⭐⭐⭐⭐ (5/5)
                                    <p class="review-content">
                                        Impressed with the unique designs and craftsmanship. However, prices could be more competitive. Friendly staff!
                                    </p>
                                </div>


                                {/* 4th review */}
                                <div class="review-card">
                                    <h4>Google Review</h4>
                                    <div class="rating">
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                    </div>
                                    <p class="reviewer">Reviewer: Sagar Suryavanshi</p>
                                    Rating: ⭐⭐⭐⭐⭐ (5/5)
                                    <p class="review-content">
                                        SwarnaRatna has a vast collection of elegant jewelry. The staff is knowledgeable and helped me find the perfect gift.
                                    </p>
                                </div>


                                {/* 5th review */}
                                <div class="review-card">
                                    <h4>Google Review</h4>
                                    <div class="rating">
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9734;</span>
                                        <span class="star">&#9734;</span>
                                        <span class="star">&#9734;</span>
                                    </div>
                                    <p class="reviewer">Reviewer: Harsh Patil</p>
                                    Rating: ⭐⭐⭐⭐⭐ (5/5)
                                    <p class="review-content">
                                        The quality of the jewelry is good, but the prices are on the higher side. Friendly and helpful staff nonetheless.
                                    </p>
                                </div>


                                {/* 6th review */}
                                <div class="review-card">
                                    <h4>Google Review</h4>
                                    <div class="rating">
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                    </div>
                                    <p class="reviewer">Reviewer: Kiran Jadhav</p>
                                    Rating: ⭐⭐⭐⭐⭐ (5/5)
                                    <p class="review-content">
                                        Amazing customer service! Found a beautiful engagement ring for my fiancée. The staff went above and beyond to assist me.
                                    </p>
                                </div>



                            </Container>
                        </section>









                    </div >
                </div >
            </section >
            <Footer></Footer>
        </>
    );
}