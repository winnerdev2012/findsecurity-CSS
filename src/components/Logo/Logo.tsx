import React from 'react';
import './Logo.scss';
import CroppedLogo from '../../assets/images/cropped-logo.jpg'

const Logo: React.FC = () => {
    return (
        <img className="nav-logo" src={CroppedLogo} alt="FindSecurity Logo" />
    );
};

export default Logo;
