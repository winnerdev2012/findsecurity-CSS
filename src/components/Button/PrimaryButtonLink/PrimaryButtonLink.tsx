import React from 'react';
import './PrimaryButtonLink.scss';
import classNames from "classnames";

interface PrimaryButtonLinkProps {
    href: string
    className?: string;
    children?: React.ReactNode;
}

const PrimaryButtonLink = ({ href, className, children}: PrimaryButtonLinkProps) => {

    return (
        <a href={href} className={classNames('btn btn-primary', className)}>{children}</a>
    );
};

export default PrimaryButtonLink;
