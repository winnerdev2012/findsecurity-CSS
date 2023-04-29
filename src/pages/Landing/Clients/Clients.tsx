import React from 'react';
import './Clients.scss';
import airbnbImage from '../../../assets/images/airbnb.png';
import team1Image from '../../../assets/images/team1.jpg';
import team2Image from '../../../assets/images/team2.jpg';
import team3Image from '../../../assets/images/team3.jpg';
import team4Image from '../../../assets/images/team4.jpg';

const Clients = () => {
    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-6bf577a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="6bf577a" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-059487f"
                    data-id="059487f" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-87ff1bf elementor-widget elementor-widget-testimonials"
                            data-id="87ff1bf" data-element_type="widget"
                            data-widget_type="testimonials.default">
                            <div className="elementor-widget-container">
                                <div className="customers-testimonials owl-carousel owl-loaded owl-drag">


                                    <div className="owl-stage-outer">
                                        <div className="owl-stage">
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="card text-center border-0">
                                                        <div className="d-flex justify-content-center  card_inner">
                                                            <a href="javascript: void(0)">
                                                                <img decoding="async"
                                                                     src={airbnbImage}
                                                                     className="w-100" alt="airbnb"/>
                                                            </a>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-text text-capitalize"> keret quasi
                                                                aperiam architecto beatae vitae dicta sunt explicabo.
                                                                Nemo ucxqui officia was voluptatem accu
                                                                santium doloremque laudantium, totam rem ap... </p>
                                                            <a className="" href="javascript: void(0)">
                                                                <div className="info-client">
                                                                    <span className="info-client__icon">
                                                                        <img decoding="async"
                                                                             src={team1Image}
                                                                             alt="airbnb"/>
                                                                    </span>
                                                                    <span
                                                                        className="info-client__name">Bin Yousuf</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active">
                                                <div className="item">
                                                    <div className="card text-center border-0">
                                                        <div className="d-flex justify-content-center  card_inner">
                                                            <a href="javascript: void(0)">
                                                                <img decoding="async"
                                                                     src={airbnbImage}
                                                                     className="w-100" alt="airbnb"/>
                                                            </a>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-text text-capitalize"> keret quasi
                                                                aperiam architecto beatae vitae dicta sunt explicabo.
                                                                Nemo ucxqui officia was voluptatem accu
                                                                santium doloremque laudantium, totam rem ap... </p>
                                                            <a className="" href="javascript: void(0)">
                                                                <div className="info-client">
                                                                    <span className="info-client__icon">
                                                                        <img decoding="async"
                                                                             src={team3Image}
                                                                             alt="airbnb"/>
                                                                    </span>
                                                                    <span className="info-client__name">Dr. Thomas Aaberg</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active">
                                                <div className="item">
                                                    <div className="card text-center border-0">
                                                        <div className="d-flex justify-content-center  card_inner">
                                                            <a href="javascript: void(0)">
                                                                <img decoding="async"
                                                                     src={airbnbImage}
                                                                     className="w-100" alt="airbnb"/>
                                                            </a>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-text text-capitalize"> keret quasi
                                                                aperiam architecto beatae vitae dicta sunt explicabo.
                                                                Nemo ucxqui officia was voluptatem accu
                                                                santium doloremque laudantium, totam rem ap... </p>
                                                            <a className="" href="javascript: void(0)">
                                                                <div className="info-client">
                                                                    <span className="info-client__icon">
                                                                        <img decoding="async"
                                                                             src={team4Image}
                                                                             alt="airbnb"/>
                                                                    </span>
                                                                    <span className="info-client__name">Campbell W. Adams</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-nav disabled">
                                        <button type="button" role="presentation" className="owl-prev"><span
                                            aria-label="Previous">‹</span></button>
                                        <button type="button" role="presentation" className="owl-next"><span
                                            aria-label="Next">›</span></button>
                                    </div>
                                    <div className="owl-dots">
                                        <button role="button" className="owl-dot"><span></span></button>
                                        <button role="button" className="owl-dot active"><span></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
