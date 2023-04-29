import React from 'react';
import './NavbarToggler.scss';

const NavbarToggler: React.FC = () => {

    return (
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                data-target="#dservice-navbar-collapse" aria-controls="dservice-navbar-collapse"
                aria-expanded="false" aria-label="Toggle navigation"></button>
    );
};

export default NavbarToggler;
