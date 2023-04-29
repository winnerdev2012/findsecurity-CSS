import React from 'react';
import './breadcrumb.scss';
interface title{
className?: string;
title: string;
}

const Breadcrumb = ({ className, title, ...props }: title) => {
    return (
        <div className="breadcrumb-wrapper breadcrumb-top d-flex align-items-end">

            <div className="container content_above">

                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-6">

                        <h3 className="page-title">{title}</h3>

                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-sm-end align-items-end">

                        <nav aria-label="breadcrumb">

                            <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items breadcrumb" >
                                    <li className="trail-item breadcrumb-item trail-begin">
                                        <a href="/#" rel="home" >
                                            <span>Home</span>
                                        </a>
                                        <meta  content="1" /></li><li className="trail-item breadcrumb-item trail-end">
                                        <span>{title}</span>
                                    </li>
                                </ul>
                            </nav>
                        </nav>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Breadcrumb;
