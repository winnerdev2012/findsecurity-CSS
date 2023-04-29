import React from 'react';
import './WidgetSocial.scss';

const WidgetSocial = () => {

    return (
        <div className="widget atbd_widget widget_social">
            <ul className="list-unstyled social-list">
                <li>
                    <i className="directorist-icon-mask map-solid" aria-hidden="true"></i>
                    <h6 className="title">253k</h6>
                    <p className="sub-title">destination</p>
                </li>
                <li>
                    <i className="directorist-icon-mask user-plus-solid" aria-hidden="true"></i>
                    <h6 className="title">50k</h6>
                    <p className="sub-title">monthly unique visitor</p>
                </li>
                <li>
                    <i className="directorist-icon-mask star-solid" aria-hidden="true"></i>
                    <h6 className="title">16k</h6>
                    <p className="sub-title">reviews &amp; options</p>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSocial;
