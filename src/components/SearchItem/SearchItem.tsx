import React from 'react';
import './SearchItem.scss';
import PrimaryButtonLink from '../Button/PrimaryButtonLink/PrimaryButtonLink'
import Icon from "../Icon/Icon";
import classNames from "classnames";
import { DataItem, Datamenu } from "../SearchItem/SearchItem/ItemTypes";

const SearchItem = ({ className, itemarray, sort_type, ...props }: Datamenu) => {
    if (sort_type == 0) {
        return (
            <div className={classNames('directorist-container-fluid', className)}  {...props} >
                {
                    itemarray.map((Itemlist: DataItem, index: number) => {
                        return (
                            <div key={index} className="directorist-listing-single directorist-listing-list directorist-listing-has-thumb ">
                                <figure className="directorist-listing-single__thumb">
                                    <a href="/#"><div className='directorist-thumnail-card directorist-card-cover' style={{ 'height': '260px' }}><div className='directorist-thumnail-card-front-wrap'>
                                        <img src={Itemlist.Imgurl} alt='a' className='directorist-thumnail-card-front-img' /></div></div></a>
                                    <div className="directorist-thumb-top-right">
                                        <span className="directorist-badge directorist-info-item directorist-badge-popular">Popular</span></div>
                                </figure>

                                <div className="directorist-listing-single__content">

                                    <div className="directorist-listing-single__info">
                                        <div className="directorist-listing-single__info--top"><div className="directorist-thumb-listing-author directorist-alignment-center">
                                            <a href="https://www.findsecurity.co.uk/author-profile/Find Security/" aria-label=" " className="">
                                                <img alt='' src={Itemlist.avatar} className='avatar avatar-32 photo' height='32' width='32' loading='lazy' />	</a>
                                        </div>
                                            <h4 className="directorist-listing-title"><a href="/#">{Itemlist.name}</a></h4>


                                            <span className="directorist-info-item directorist-rating-meta directorist-rating-transparent">

                                                <Icon name="directorist-icon-mask" />
                                                <span className="directorist-rating-avg">
                                                    2.0	</span>
                                                <span className="directorist-rating-total">
                                                    1 Review	</span>
                                            </span></div>
                                        <div className="directorist-listing-single__info--list"><ul><li>
                                            <div className="directorist-listing-card-location">
                                                <Icon name="directorist-icon-mask" /><span className="directorist-listing-single__info--list__label"></span>
                                                <div className="directorist-listing-card-location-list">
                                                    <a href='https://www.findsecurity.co.uk/single-business-location/toronto/?directory_type=security-companies'>Toronto</a>, <a href='https://www.findsecurity.co.uk/single-business-location/berlin/?directory_type=security-companies'>Berlin</a>    </div>
                                            </div></li><li>
                                                <div className="directorist-listing-card-posted-on"><Icon name="directorist-icon-mask" /><span className="directorist-listing-single__info--list__label"></span>April 17, 2020</div></li><li>
                                                <div className="directorist-listing-card-phone"><Icon name="directorist-icon-mask" /><span className="directorist-listing-single__info--list__label"></span><a href="tel:4157963633">(415) 796-3633</a></div></li></ul></div>
                                        <div className="directorist-listing-single__info--excerpt"></div>
                                        <div className="directorist-listing-single__info--right">
                                            <span className="directorist-info-item directorist-pricing-meta">

                                                <span className="directorist-listing-price-label">Budget:</span>


                                                <span className="directorist-listing-price">&#036;12.00</span>

                                                <span className="directorist-pricing-period">/ daily</span>


                                            </span></div>
                                    </div>

                                    <div className="directorist-listing-single__meta">
                                        <div className="directorist-listing-single__meta--left">
                                            <div className="directorist-listing-category">
                                                <a href="https://www.findsecurity.co.uk/single-business-category/all-security-companies/?directory_type=security-companies"><Icon name="directorist-icon-mask" />All Companies</a>
                                                <div className="directorist-listing-category__popup">
                                                    <span className="directorist-listing-category__extran-count">+2</span>
                                                    <div className="directorist-listing-category__popup__content">

                                                        <a href="https://www.findsecurity.co.uk/single-business-category/door-supervision-companies/?directory_type=security-companies"><Icon name="directorist-icon-mask" /> Door Supervision</a>


                                                        <a href="https://www.findsecurity.co.uk/single-business-category/mobile-security-companies/?directory_type=security-companies"><Icon name="directorist-icon-mask" /> Mobile Security</a>

                                                    </div>

                                                </div>
                                            </div></div>
                                        <div className="directorist-listing-single__meta--right">
                                            <div className="directorist-mark-as-favorite">
                                                <a className="directorist-mark-as-favorite__btn  directorist-fav_1900" data-listing_id="1900" href="#">
                                                    <span className="directorist-favorite-icon"></span>
                                                    <span className="directorist-favorite-tooltip"></span>
                                                </a>
                                            </div><a href="#" className="dservice-grid-cont-btn" data-toggle="modal" data-listing_id="1900" data-listing_email="contact@gmail.com" data-target="#contact_modal">Contact</a></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    } else {
        console.log("sort_type:::" + sort_type)
        return (
            <div className={classNames('directorist-container-fluid', className)}  {...props} >
                {
                    itemarray.map((Itemlist: DataItem, index: number) => {
                        return (
                            <div key={index} className="directorist-listing-single directorist-listing-list directorist-listing-has-thumb ">
                                <figure className="directorist-listing-single__thumb">
                                    <a href="/#"><div className='directorist-thumnail-card directorist-card-cover' style={{ 'height': '260px' }}><div className='directorist-thumnail-card-front-wrap'>
                                        <img src={Itemlist.Imgurl} alt='a' className='directorist-thumnail-card-front-img' /></div></div></a>
                                    <div className="directorist-thumb-top-right">
                                        <span className="directorist-badge directorist-info-item directorist-badge-popular">Popular</span></div>
                                </figure>

                                <div className="directorist-listing-single__content">

                                    <div className="directorist-listing-single__info">
                                        <div className="directorist-listing-single__info--top"><div className="directorist-thumb-listing-author directorist-alignment-center">
                                            <a href="https://www.findsecurity.co.uk/author-profile/Find Security/" aria-label=" " className="">
                                                <img alt='' src={Itemlist.avatar} className='avatar avatar-32 photo' height='32' width='32' loading='lazy' />	</a>
                                        </div>
                                            <h4 className="directorist-listing-title"><a href="/#">{Itemlist.name}</a></h4>


                                            <span className="directorist-info-item directorist-rating-meta directorist-rating-transparent">

                                                <Icon name="directorist-icon-mask star-solid" />
                                                <Icon name="directorist-icon-mask star-solid" />
                                                <Icon name="directorist-icon-mask star" />
                                                <Icon name="directorist-icon-mask star" />
                                                <Icon name="directorist-icon-mask star" />
                                                <span className="directorist-rating-avg">
                                                    2.0	</span>
                                                <span className="directorist-rating-total">
                                                    1 Review	</span>
                                            </span></div>
                                        <div className="directorist-listing-single__info--list"><ul><li>
                                            <div className="directorist-listing-card-location">
                                                <Icon name="directorist-icon-mask map-marker-solid" /><span className="directorist-listing-single__info--list__label"></span>
                                                <div className="directorist-listing-card-location-list">
                                                    <a href='https://www.findsecurity.co.uk/single-business-location/toronto/?directory_type=security-companies'>Toronto</a>, <a href='https://www.findsecurity.co.uk/single-business-location/berlin/?directory_type=security-companies'>Berlin</a>    </div>
                                            </div></li><li>
                                                <div className="directorist-listing-card-posted-on"><Icon name="directorist-icon-mask clock-solid" /><span className="directorist-listing-single__info--list__label"></span>April 17, 2020</div></li><li>
                                                <div className="directorist-listing-card-phone"><Icon name="directorist-icon-mask phone-solid" /><span className="directorist-listing-single__info--list__label"></span><a href="tel:4157963633">(415) 796-3633</a></div></li></ul></div>
                                        <div className="directorist-listing-single__info--excerpt"></div>
                                        <div className="directorist-listing-single__info--right">
                                            <span className="directorist-info-item directorist-pricing-meta">

                                                <span className="directorist-listing-price-label">Budget:</span>


                                                <span className="directorist-listing-price">&#036;12.00</span>

                                                <span className="directorist-pricing-period">/ daily</span>


                                            </span></div>
                                    </div>

                                    <div className="directorist-listing-single__meta">
                                        <div className="directorist-listing-single__meta--left">
                                            <div className="directorist-listing-category">
                                                <a href="https://www.findsecurity.co.uk/single-business-category/all-security-companies/?directory_type=security-companies"><Icon name="directorist-icon-mask search-solid" />All Companies</a>
                                                <div className="directorist-listing-category__popup">
                                                    <span className="directorist-listing-category__extran-count">+2</span>
                                                    <div className="directorist-listing-category__popup__content">

                                                        <a href="https://www.findsecurity.co.uk/single-business-category/door-supervision-companies/?directory_type=security-companies"><Icon name="directorist-icon-mask" /> Door Supervision</a>


                                                        <a href="https://www.findsecurity.co.uk/single-business-category/mobile-security-companies/?directory_type=security-companies"><Icon name="directorist-icon-mask" /> Mobile Security</a>

                                                    </div>

                                                </div>
                                            </div></div>
                                        <div className="directorist-listing-single__meta--right">
                                            <div className="directorist-mark-as-favorite">
                                                <a className="directorist-mark-as-favorite__btn  directorist-fav_1900" data-listing_id="1900" href="#">
                                                    <span className="directorist-favorite-icon"></span>
                                                    <span className="directorist-favorite-tooltip"></span>
                                                </a>
                                            </div><a href="#" className="dservice-grid-cont-btn" data-toggle="modal" data-listing_id="1900" data-listing_email="contact@gmail.com" data-target="#contact_modal">Contact</a></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );

    }
}

export default SearchItem;
