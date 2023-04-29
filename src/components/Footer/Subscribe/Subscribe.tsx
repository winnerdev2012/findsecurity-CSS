import React from 'react';
import './Subscribe.scss';

const Subscribe = () => {

    return (
        <div className="widget  widget_text">
            <h2 className="widget-title">Subscribe &#038; Update</h2>
            <div className="textwidget">
                <p>Subscribe to get updates and information. Don&#8217;t worry, we don&#8217;t send
                    spam</p>
                <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-3798" method="post"
                      data-id="3798" data-name="Subscribe">
                    <div className="mc4wp-form-fields">
                        <div className="widget-wrapper">
                            <div className="widget-default">
                                <div className="widget-content">
                                    <div className="subscribe-widget">
                                        <input type="email" className="form-control m-bottom-20"
                                               placeholder="Enter email"/>
                                        <button className="btn btn-sm btn-primary shadow-none"
                                                type="submit">
                                            <i className="la la-send"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
