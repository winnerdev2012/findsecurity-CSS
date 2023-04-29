import React from 'react';
import './Headbar.scss';
import Icon from "../../../components/Icon/Icon";

const Pagearea = () => {

    return (
        <div className="directorist-header-bar">

            <div className="directorist-container-fluid">

                <div className="directorist-listings-header">


                    <div className="directorist-listings-header__left">

                        <a href="#" className="directorist-btn directorist-btn-sm directorist-btn-px-15 directorist-btn-outline-primary directorist-filter-btn"><Icon name="directorist-icon-mask filter-solid"/>Filters</a>

                        <h3 className="directorist-header-found-title"><span>6</span> Items Found</h3>
                    </div>



                    <div className="directorist-listings-header__right">
                        <h5>Sort by:</h5>
                        <div className="directorist-dropdown directorist-dropdown-js directorist-sortby-dropdown">

                            <a className="directorist-dropdown__toggle directorist-dropdown__toggle-js directorist-btn directorist-btn-sm directorist-btn-px-15 directorist-btn-outline-primary directorist-toggle-has-icon" href="#">Sort By<span className="directorist-icon-caret"></span></a>

                            <div className="directorist-dropdown__links directorist-dropdown__links-js directorist-dropdown__links--right">

                                <form id="directorsit-listing-sort" method="post" action="#">
                                    <a className="directorist-dropdown__links--single directorist-dropdown__links--single-js " data-link="/search-result/?directory_type=security-companies&amp;q&amp;in_cat=35&amp;address&amp;cityLat&amp;cityLng&amp;view=list&amp;sort=title-asc">A to Z (title)</a>
                                    <a className="directorist-dropdown__links--single directorist-dropdown__links--single-js " data-link="/search-result/?directory_type=security-companies&amp;q&amp;in_cat=35&amp;address&amp;cityLat&amp;cityLng&amp;view=list&amp;sort=title-desc">Z to A (title)</a>
                                    <a className="directorist-dropdown__links--single directorist-dropdown__links--single-js " data-link="/search-result/?directory_type=security-companies&amp;q&amp;in_cat=35&amp;address&amp;cityLat&amp;cityLng&amp;view=list&amp;sort=date-desc">Latest listings</a>
                                    <a className="directorist-dropdown__links--single directorist-dropdown__links--single-js " data-link="/search-result/?directory_type=security-companies&amp;q&amp;in_cat=35&amp;address&amp;cityLat&amp;cityLng&amp;view=list&amp;sort=date-asc">Oldest listings</a>
                                    <a className="directorist-dropdown__links--single directorist-dropdown__links--single-js " data-link="/search-result/?directory_type=security-companies&amp;q&amp;in_cat=35&amp;address&amp;cityLat&amp;cityLng&amp;view=list&amp;sort=views-desc">Popular listings</a>
                                    <a className="directorist-dropdown__links--single directorist-dropdown__links--single-js " data-link="/search-result/?directory_type=security-companies&amp;q&amp;in_cat=35&amp;address&amp;cityLat&amp;cityLng&amp;view=list&amp;sort=price-asc">Price (low to high)</a>
                                    <a className="directorist-dropdown__links--single directorist-dropdown__links--single-js " data-link="/search-result/?directory_type=security-companies&amp;q&amp;in_cat=35&amp;address&amp;cityLat&amp;cityLng&amp;view=list&amp;sort=price-desc">Price (high to low)</a>
                                    <a className="directorist-dropdown__links--single directorist-dropdown__links--single-js " data-link="/search-result/?directory_type=security-companies&amp;q&amp;in_cat=35&amp;address&amp;cityLat&amp;cityLng&amp;view=list&amp;sort=rand">Random listings</a>
                                </form>

                            </div>

                        </div>
                        <div className="view-mode directorist-viewas-dropdown">


                            <a className="directorist-dropdown__links--single action-btn " href="/#">
                                <Icon name="directorist-icon-mask grip-hori-solid"/>
                            </a>


                            <a className="directorist-dropdown__links--single action-btn active" href="/#">
                                <Icon name="directorist-icon-mask list-solid"/>
                            </a>


                            <a className="directorist-dropdown__links--single action-btn " href="/#">
                                <Icon name="directorist-icon-mask map-solid"/>
                            </a>


                        </div>				</div>


                </div>

                <div className="directorist-search-slide">


                    <div className="directorist-archive-adv-filter directorist-advanced-filter">
                        <form action="https://www.findsecurity.co.uk/search-result/" className="directorist-advanced-filter__form">
                            <input type="hidden" name='directory_type' value='security-companies' />
                            <div className="directorist-advanced-filter__basic">
                                <div className="directorist-advanced-filter__basic--element">
                                    <div className="directorist-search-field directorist-form-group directorist-search-query">
                                        <input className="directorist-form-element" type="text" name="q" value="" placeholder="What are you looking for?" />
                                    </div></div>
                                <div className="directorist-advanced-filter__basic--element"><div className="directorist-search-field">
                                    <div className="directorist-select directorist-search-category">
                                        <select name="in_cat" className="search_fields directorist-category-select" data-placeholder="Category" data-isSearch="true" data-selected-id="35" data-selected-label="All Companies">
                                            <option value="">Select Category</option><option data-custom-field="" value="35" selected>All Companies</option><option data-custom-field="" value="23">Door Supervision</option><option data-custom-field="" value="31">Event Security</option><option data-custom-field="" value="41">Key Holding &amp; Alarm Response</option><option data-custom-field="" value="43">Locksmith</option><option data-custom-field="" value="24">Mobile Security</option><option data-custom-field="" value="40">Painters</option><option data-custom-field="" value="34">Security Guards</option>		</select>

                                    </div>
                                </div></div>
                                <div className="directorist-advanced-filter__basic--element">
                                    <div className="directorist-search-field directorist-form-group directorist-icon-left">
                                        <span className="directorist-input-icon directorist-filter-location-icon"><Icon name="directorist-icon-mask"/></span>
                                        <input type="text" name="address" id="addressId" value="" placeholder="Address, city, zip.." className="directorist-form-element directorist-location-js location-name" />

                                        <div className="address_result location-names"></div>
                                        <input type="hidden" id="cityLat" name="cityLat" value="" />
                                        <input type="hidden" id="cityLng" name="cityLng" value="" />
                                    </div>

                                </div>
                            </div>

                            <div className="directorist-advanced-filter__advanced">
                                <div className="directorist-form-group directorist-advanced-filter__advanced--element direcorist-search-field-review">
                                    <div className="directorist-search-field">
                                        <label>Review</label>
                                        <div className="directorist-select">
                                            <select name='search_by_rating' data-placeholder="Select Review " data-isSearch="true">
                                                <option value="" >Select Ratings</option><option value="5" >5 Star</option><option value="4" >4 Star &amp; Up</option><option value="3" >3 Star &amp; Up</option><option value="2" >2 Star &amp; Up</option><option value="1" >1 Star &amp; Up</option>		</select>
                                        </div>
                                    </div></div>
                                <div className="directorist-form-group directorist-advanced-filter__advanced--element direcorist-search-field-tag">
                                    <div className="directorist-search-field theme-search-dropdown">

                                        <div className="theme-search-dropdown__label">
                                            <label>Tag</label>
                                        </div>

                                        <div className="theme-search-dropdown-toggle">

                                            <div className="directorist-search-tags directorist-flex">


                                                <div className="directorist-checkbox directorist-checkbox-primary">
                                                    <input type="checkbox" name="in_tag[]" value="22" id="113932641822" />
                                                    <label className="directorist-checkbox__label">coocking</label>
                                                </div>


                                                <div className="directorist-checkbox directorist-checkbox-primary">
                                                    <input type="checkbox" name="in_tag[]" value="27" id="113932641827" />
                                                    <label className="directorist-checkbox__label">Electricians</label>
                                                </div>


                                                <div className="directorist-checkbox directorist-checkbox-primary">
                                                    <input type="checkbox" name="in_tag[]" value="28" id="113932641828" />
                                                    <label className="directorist-checkbox__label">Home Cleaners</label>
                                                </div>


                                                <div className="directorist-checkbox directorist-checkbox-primary">
                                                    <input type="checkbox" name="in_tag[]" value="29" id="113932641829" />
                                                    <label className="directorist-checkbox__label">homrtutor</label>
                                                </div>


                                                <div className="directorist-checkbox directorist-checkbox-primary">
                                                    <input type="checkbox" name="in_tag[]" value="37" id="113932641837" />
                                                    <label className="directorist-checkbox__label">Looksmith</label>
                                                </div>


                                                <div className="directorist-checkbox directorist-checkbox-primary">
                                                    <input type="checkbox" name="in_tag[]" value="26" id="113932641826" />
                                                    <label className="directorist-checkbox__label">tutor</label>
                                                </div>


                                            </div>

                                            <a href="#" className="directorist-btn-ml">Show More</a>

                                        </div>

                                    </div></div>
                                <div className="directorist-form-group directorist-advanced-filter__advanced--element direcorist-search-field-radius_search">
                                    <div className="directorist-search-field theme-search-dropdown">

                                        <div className="theme-search-dropdown__label">

                                            <label>Radius Search</label>

                                        </div>

                                        <div className="theme-search-dropdown-toggle">

                                            <div className="directorist-range-slider-wrap">
                                                <div className="directorist-range-slider" data-default-radius="0" data-slider-unit="Miles"></div>
                                                <p className="directorist-range-slider-current-value"></p>
                                                <input type="hidden" className="directorist-range-slider-value" name="miles" value="0" />
                                            </div>

                                        </div>

                                    </div></div>
                                <div className="directorist-form-group directorist-advanced-filter__advanced--element direcorist-search-field-pricing">
                                    <div className="directorist-search-field directorist-price-ranges-wrapper">

                                        <div className="theme-search-dropdown">

                                            <div className="theme-search-dropdown__label">
                                                <label>Price</label>
                                            </div>

                                            <div className="directorist-price-ranges theme-search-dropdown-toggle">


                                                <div className="directorist-price-ranges__item directorist-form-group"><input type="text" name="price[0]" className="directorist-form-element" placeholder="Min" value="" /></div>
                                                <div className="directorist-price-ranges__item directorist-form-group"><input type="text" name="price[1]" className="directorist-form-element" placeholder="Max" value="" /></div>



                                                <div className="directorist-price-ranges__item directorist-price-ranges__price-frequency">
                                                    <label className="directorist-price-ranges__price-frequency--btn">
                                                        <input type="radio" name="price_range" value="bellow_economy" /><span className="directorist-pf-range">&#036;</span>
                                                    </label>
                                                    <label className="directorist-price-ranges__price-frequency--btn">
                                                        <input type="radio" name="price_range" value="economy" /><span className="directorist-pf-range">&#036;&#036;</span>
                                                    </label>
                                                    <label className="directorist-price-ranges__price-frequency--btn">
                                                        <input type="radio" name="price_range" value="moderate" /><span className="directorist-pf-range">&#036;&#036;&#036;</span>
                                                    </label>
                                                    <label className="directorist-price-ranges__price-frequency--btn">
                                                        <input type="radio" name="price_range" value="skimming" /><span className="directorist-pf-range">&#036;&#036;&#036;&#036;</span>
                                                    </label>
                                                </div>


                                            </div>

                                        </div>

                                    </div></div>
                                <div className="directorist-form-group directorist-advanced-filter__advanced--element direcorist-search-field-email">
                                    <div className="directorist-search-field">

                                        <label>Email</label>

                                        <div className="directorist-form-group">
                                            <input className="directorist-form-element" type="text" name="email" value="" placeholder="Email" />
                                        </div>

                                    </div></div>
                                <div className="directorist-form-group directorist-advanced-filter__advanced--element direcorist-search-field-business_hours"></div>
                            </div>

                            <div className="directorist-advanced-filter__action directorist-flex directorist-justify-content-end">

                                <a href="#" className="directorist-btn directorist-btn-sm directorist-btn-outline-dark directorist-btn-reset-js">Reset Filters</a>

                                <button type="submit" className="directorist-btn directorist-btn-sm directorist-btn-dark">Apply Filters</button>

                            </div>	</form>
                    </div>			</div>

            </div>

        </div>
    );
};

export default Pagearea;
