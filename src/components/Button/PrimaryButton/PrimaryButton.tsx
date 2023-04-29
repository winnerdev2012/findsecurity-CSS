import React from 'react';
import './PrimaryButton.scss';
import classNames from "classnames";

interface PrimaryButtonProps {
    className?: string;
    children?: React.ReactNode;
}

const PrimaryButton = ({ className, children}: PrimaryButtonProps) => {

        return (
            <button className={classNames('btn btn-primary', className)}>{children}</button>
        );
};

export default PrimaryButton;
