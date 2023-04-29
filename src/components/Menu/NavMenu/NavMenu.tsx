import React from 'react';
import classNames from "classnames";
import {MenuData, MenuItem} from '../MenuTypes';
import './NavMenu.scss';

const NavMenu = ({ className, items, ...props }: MenuData) => {

    return (
        <ul className={classNames('navbar-nav', className)} {...props}>
            {
                items.map((item: MenuItem, index: number) => {
                    return (
                        <li key={index} className={classNames('menu-item menu-item-type-custom menu-item-object-custom', item.className, {'menu-item-has-children': item.subMenus && item.subMenus.length > 0}, {'current-menu-ancestor current-menu-parent': item.active})}>
                            <a href={item.url}>{item.name}</a>
                            <ul className="sub-menu">
                                {item.subMenus && item.subMenus.map((sumMenu: MenuItem, index: number) => {
                                    return (
                                        <li key={index} className={classNames('menu-item menu-item-type-post_type menu-item-object-page', sumMenu.className, {'current-menu-item page_item current_page_item': sumMenu.active})}>
                                            <a href={sumMenu.url} aria-current="page">{sumMenu.name}</a></li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default NavMenu;
