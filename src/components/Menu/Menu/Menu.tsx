import React from 'react';
import classNames from "classnames";
import {MenuData, MenuItem} from "../MenuTypes";
import './Menu.scss';

const Menu = ({ className, items, ...props }: MenuData) => {

    return (
        <ul className={classNames('menu', className)} {...props}>
            {
                items.map((item: MenuItem, index: number) => {
                    return (
                        <li key={index} className={classNames('menu-item menu-item-type-post_type menu-item-object-page', item.className)}>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Menu;
