import React from 'react';
import './Header.scss';
import LogoWrapper from './LogoWrapper/LogoWrapper'
import NavbarToggler from './NavbarToggler/NavbarToggler'
import PrimaryButtonLink from '../Button/PrimaryButtonLink/PrimaryButtonLink'
import Icon from "../Icon/Icon";
import NavMenu from "../Menu/NavMenu/NavMenu";
import {MenuItem} from "../Menu/MenuTypes";

const Header = () => {
    const menus: MenuItem[] = [
        {
            url: 'javascript: void(0)',
            name: 'Home',
            active: true,
            subMenus: [
                {
                    url: 'javascript: void(0)', 
                    active: true,
                    name: 'Home One',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Home Two',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Home Three',
                }
            ]
        },
        {
            url: 'javascript: void(0)',
            name: 'Providers',
            subMenus: [
                {
                    url: 'javascript: void(0)',
                    name: 'Business Grid View',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Business List View',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Categories',
                },
                {
                    url: '/business-location',    // Business-426
                    name: 'Locations',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Map View 3 Column',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Map View 2 Column',
                }
            ]
        },
        {
            url: 'javascript: void(0)',
            name: 'Services',
            subMenus: [
                {
                    url: 'javascript: void(0)',
                    name: 'Services Grid View',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Services List View',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Categories',
                },
            ]
        },
        {
            url: 'javascript: void(0)',
            name: 'Pages',
            subMenus: [
                {
                    url: 'javascript: void(0)',
                    name: 'Author Profile',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Dashboard',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'About Us',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Contact',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'Blogs',
                },
                {
                    url: 'javascript: void(0)',
                    name: 'FAQ',
                },
            ]
        }
    ];
    return (
        <nav className="navbar navbar-expand-lg navbar-light mainmenu__menu fixed-top bg-white headroom menu-area-sticky">
            <LogoWrapper />
            <NavbarToggler />
            <div className="nav-wrapper">
                <div></div>
                <div className="collapse navbar-collapse" id="dservice-navbar-collapse">
                    <NavMenu items={menus} id='menu-primary-menu' className='mr-auto mb-0'/>
                    <div className="px-3 al-menu-btn">
                        <PrimaryButtonLink href="javascript: void(0)" className="add-new-btn btn-block">
                            <Icon name="directorist-icon-mask" /> Add Listing
                        </PrimaryButtonLink>
                    </div>
                </div>
            </div>
            <div className="menu-right menu-logout">
                <div className="access_area">
                    <ul className="d-flex list-unstyled mb-0 nav-flex-icons">
                        <li className="d-lg-block d-none">
                            <PrimaryButtonLink href="javascript: void(0)" className="access-link">
                                <Icon name="directorist-icon-mask" /> Add Listing
                            </PrimaryButtonLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
