import React from 'react';
import LogoFooter from '../Logo/LogoFooter/LogoFooter';
import {MenuItem} from '../Menu/MenuTypes'
import Menu from "../Menu/Menu/Menu";
import WidgetSocial from "./WidgetSocial/WidgetSocial";
import Subscribe from "./Subscribe/Subscribe";
import CopyRight from "./CopyRight/CopyRight";

import './Footer.scss';

const Footer = () => {
    const usefulLinks: MenuItem[] = [
        {
            url: '#',
            name: 'About Us'
        },
        {
            url: '#',
            name: 'Contact Us'
        },
        {
            url: '#',
            name: 'Advertise with Us'
        },
        {
            url: '#',
            name: 'Blogs'
        },
        {
            url: '#',
            name: 'Reviews'
        }
    ];

    const topBusiness: MenuItem[] = [
        {
            url: '#',
            name: 'Locksmith on Wheels'
        },
        {
            url: '#',
            name: 'Berkeley Electrics'
        },
        {
            url: '#',
            name: 'Cafe de Casa'
        },
        {
            url: '#',
            name: 'Berkeley Driving School'
        },
        {
            url: '#',
            name: 'Martinizing Dry Cleaners'
        }
    ];

    return (
        <footer className="footer-section">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget  widget_media_image">
                                <LogoFooter />
                            </div>
                            <WidgetSocial />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget  widget_nav_menu">
                                <h2 className="widget-title">Useful Links</h2>
                                <div className="menu-useful-links-container">
                                    <Menu items={usefulLinks} id="menu-useful-links" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget  widget_nav_menu">
                                <h2 className="widget-title">Top Business</h2>
                                <div className="menu-top-business-container">
                                    <Menu items={topBusiness} id="menu-top-business" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Subscribe />
                        </div>
                    </div>
                </div>
            </div>
            <CopyRight />
        </footer>
    );
};

export default Footer;
