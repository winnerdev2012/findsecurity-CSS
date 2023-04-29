import React from 'react';
import './BusinessProviders.scss';

const BusinessProviders = () => {

    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-92dab1e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="92dab1e" data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d000224"
                    data-id="d000224" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-856fba8 elementor-widget elementor-widget-heading"
                            data-id="856fba8" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">Business
                                    Providers in
                                    Your Area</h3>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-e4d8215 elementor-widget elementor-widget-listings"
                            data-id="e4d8215" data-element_type="widget" data-widget_type="listings.default">
                            <div className="elementor-widget-container">
                                <div id='listing-grid'>
                                    <div className="directorist-archive-contents directorist-instant-search"
                                         data-atts="{&quot;map_zoom_level&quot;:&quot;&quot;,&quot;view&quot;:&quot;grid&quot;,&quot;orderby&quot;:&quot;date&quot;,&quot;order&quot;:&quot;desc&quot;,&quot;listings_per_page&quot;:&quot;3&quot;,&quot;category&quot;:&quot;&quot;,&quot;tag&quot;:&quot;&quot;,&quot;location&quot;:&quot;&quot;,&quot;featured_only&quot;:&quot;&quot;,&quot;popular_only&quot;:&quot;no&quot;,&quot;header&quot;:&quot;no&quot;,&quot;header_title&quot;:&quot;&quot;,&quot;columns&quot;:&quot;3&quot;,&quot;show_pagination&quot;:&quot;&quot;,&quot;advanced_filter&quot;:&quot;no&quot;,&quot;map_height&quot;:&quot;&quot;,&quot;display_preview_image&quot;:&quot;yes&quot;,&quot;logged_in_user_only&quot;:&quot;no&quot;,&quot;redirect_page_url&quot;:&quot;&quot;,&quot;directory_type&quot;:&quot;business-providers&quot;,&quot;default_directory_type&quot;:&quot;business-providers&quot;,&quot;_current_page&quot;:&quot;listing&quot;}">
                                        <div
                                            className="directorist-archive-items directorist-archive-grid-view">
                                            <div className="directorist-container-fluid">
                                                <div className="directorist-archive-notfound">No listings found.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-100bf00 elementor-align-center elementor-widget elementor-widget-button"
                            data-id="100bf00" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a href="javascript: void(0)"
                                       className="elementor-button-link elementor-button elementor-size-sm"
                                       role="button">
                              <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">View All Listing</span>
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

export default BusinessProviders;
