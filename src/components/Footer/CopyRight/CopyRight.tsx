import React from 'react';
import './CopyRight.scss';

const CopyRight = () => {

    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row footer-bottom--all">
                    <div className="col-lg-6">
                        <div className="footer-bottom--content" id="footer_text_color">
                            ©2023 dservice. Made by <a href="#">Winnerdev</a>
                        </div>
                    </div>
                    <div className="col-lg-6 f_bottom--social">
                        <div className="footer-bottom--social">
                            <a href="javascript: void(0)"><i className="directorist-icon-mask" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyRight;
