import React from 'react';
import './TopBusinessCategory.scss';
import Locksmith from '../../../assets/images/5-1.jpg';
import Painters from '../../../assets/images/c.jpg';

const TopBusinessCategory = () => {

    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-977f3d1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="977f3d1" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a552a48"
                    data-id="a552a48" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-b6d377b elementor-widget elementor-widget-heading"
                            data-id="b6d377b" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">Top Local
                                    Business
                                    Category</h3>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-c58b3d1 elementor-widget elementor-widget-popular_categories"
                            data-id="c58b3d1" data-element_type="widget"
                            data-widget_type="popular_categories.default">
                            <div className="elementor-widget-container">
                                <div id="directorist" className="atbd_wrapper directorist-w-100">
                                    <div className="directorist-container-fluid">
                                        <div className="atbd_all_categories atbdp-no-margin">
                                            <div className="directorist-row">
                                                <div className="directorist-col-3">
                                                    <a className="atbd_category_single"
                                                       href="javascript: void(0)">
                                                        <figure>
                                                            <img decoding="async" src={Locksmith} title="Locksmith" alt="Locksmith"/>
                                                            <figcaption className="overlay-bg">
                                                                <div className="cat-box">
                                                                    <div>
                                                                        <div className="icon">
                                                                            <i className="directorist-icon-mask lock-open-solid"
                                                                            aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="cat-info">
                                                                            <h4 className="cat-name">Locksmith</h4>
                                                                            <span className="cat-count">2 <span> Listings</span></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                    </a>
                                                </div>
                                                <div className="directorist-col-3">
                                                    <a className="atbd_category_single"
                                                       href="javascript: void(0)">
                                                        <figure>
                                                            <img decoding="async" src={Painters}
                                                                 title="Painters" alt="Painters"/>
                                                            <figcaption className="overlay-bg">
                                                                <div className="cat-box">
                                                                    <div>
                                                                        <div className="icon">
                                                                            <i className="directorist-icon-mask paint-brush-solid"
                                                                            aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="cat-info">
                                                                            <h4 className="cat-name">Painters</h4>
                                                                            <span className="cat-count">2 <span> Listings </span></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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

export default TopBusinessCategory;
