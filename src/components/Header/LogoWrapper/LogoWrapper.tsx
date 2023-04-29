import React from 'react';
import './LogoWrapper.scss';
import Logo from "../../Logo/Logo";

const LogoWrapper: React.FC = () => {

    return (
        <div className="logo-wrapper">
            <div className="logo logo-top">
                <div className="site-branding">
                    <a className="navbar-brand order-sm-1 order-1" href="index.html">
                        <Logo />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LogoWrapper;
