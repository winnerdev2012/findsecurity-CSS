import React from 'react';
import './Icon.scss';

export interface IconProps {
    name: string
    count?: number
}

const Icon = ({name, count}: IconProps) => {

    return (
        <i className={name} aria-hidden="true"></i>
    );
};

export default Icon;
