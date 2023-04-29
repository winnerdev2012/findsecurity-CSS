import React from 'react';
import './DownloadApp.scss';
import mobileImage from '../../../assets/images/mobile.png'

const DownloadApp = () => {

    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-0a1d967 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="0a1d967" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d5ae08"
                    data-id="5d5ae08" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-4dba703 elementor-widget elementor-widget-call_to_action"
                            data-id="4dba703" data-element_type="widget"
                            data-widget_type="call_to_action.default">
                            <div className="elementor-widget-container">
                                <div className="app-rated">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="download-content">
                                                <div className="download-content__head">
                                                    <h3>Download our Top Rated App</h3>
                                                    <p>Made Just for you!<strong>It’s Free,</strong></p>
                                                </div>
                                                <ul className="list-unstyled store-btns">
                                                    <li className='store-btns-inline'>
                                                        <a href="javascript: void(0)" className="download-content__button--start">
                                                            <i className="directorist-icon-mask download-content_icon icon-apple"
                                                               aria-hidden="true"></i>
                                                            <span className="download-content-span">
                                                   <p>
                                                      Available now on the<br/>
                                                      <strong>App Store</strong>
                                                   </p>
                                                </span>
                                                        </a>
                                                    </li>
                                                    <li className='store-btns-inline'>
                                                        <a href="javascript: void(0)" className="download-content__button--start">
                                                            <i className="directorist-icon-mask download-content_icon icon-google"
                                                               aria-hidden="true"></i>
                                                            <span className="download-content-span">
                                                   <p> Get on the<br/>
                                                      <strong>Google Play</strong>
                                                   </p>
                                                </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 ml-auto col-md-6">
                                            <div className="download-content-right">
                                                <img decoding="async"
                                                     className="rounded-sm  download-content-right__image"
                                                     src={mobileImage}/>
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

export default DownloadApp;
