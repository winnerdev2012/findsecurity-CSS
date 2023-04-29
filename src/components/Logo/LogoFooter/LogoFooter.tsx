import React from 'react';
import './LogoFooter.scss';
import LogoWhite from '../../../assets/images/Logo-white.png'

const LogoFooter = () => {

    return (
        <img width="150" height="40" src={LogoWhite} className="image attachment-full size-full" alt="" decoding="async" loading="lazy"/>
    );
};

export default LogoFooter;
