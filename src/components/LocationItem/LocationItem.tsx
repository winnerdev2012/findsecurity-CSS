import React from 'react';
import './LocationItem.scss';
import PrimaryButtonLink from '../Button/PrimaryButtonLink/PrimaryButtonLink'
import Icon from "../Icon/Icon";
import classNames from "classnames";
import { DataItem, Datamenu } from "./LocationItem/LocationItemType";
import London from '../../assets/images/team3.jpg';

const LocationItem = ({ className, itemarray, sort_type, ...props }: Datamenu) => {

    return (
        <div className={classNames('directorist-row', className)}  {...props} >
            {
                itemarray.map((Itemlist: DataItem, index: number) => {
                    console.log(Itemlist.Imgurl);
                    return (

                        <div key={index} className="directorist-col-4">

                            <a className="atbd_location_grid" href="/#">
                                <figure>
                                    <img decoding="async" src={Itemlist.Imgurl} title={Itemlist.name} alt={Itemlist.name} />
                                    <figcaption>
                                        <h3>{Itemlist.name}</h3>
                                        <span className="listing-count">{"" + Itemlist.vcount}<span className="listing-label"> Listings</span></span>
                                    </figcaption>
                                </figure>
                            </a>

                        </div>
                    )
                })
            }
        </div>
    );
}

export default LocationItem;
