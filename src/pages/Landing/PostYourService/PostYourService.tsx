import React from 'react';
import './PostYourService.scss';
import ctaImage from '../../../assets/images/cta.png';

const PostYourService = () => {

    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-c9a41b1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="c9a41b1" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b28a78b"
                    data-id="b28a78b" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-e92e142 elementor-widget elementor-widget-image"
                            data-id="e92e142" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                                <img decoding="async" width="500" height="358"
                                     src={ctaImage}
                                     className="attachment-large size-large wp-image-3368" alt="" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4c1a635"
                    data-id="4c1a635" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-79bd817 elementor-widget elementor-widget-text-editor"
                            data-id="79bd817" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p>Are you a</p>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-e07753e elementor-widget elementor-widget-text-editor"
                            data-id="e07753e" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p>Business Provider?</p>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-89d5d22 elementor-widget elementor-widget-text-editor"
                            data-id="89d5d22" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod
                                    tempor invidunt ut labore.</p>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-4622de7 elementor-tablet-align-center elementor-widget elementor-widget-button"
                            data-id="4622de7" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a href="javascript: void(0)"
                                       className="elementor-button-link elementor-button elementor-size-sm"
                                       role="button">
                              <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Post Your Service</span>
                              </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostYourService;
