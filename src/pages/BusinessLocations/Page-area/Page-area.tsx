import React from 'react';
import './Page-area.scss';
import { DataItem } from "../../../components/LocationItem/LocationItem/LocationItemType";
import  LocationItem  from "../../../components/LocationItem/LocationItem";
import Toronto from '../../../assets/images/business-location/Rome.jpg';
import Tokyo from '../../../assets/images/business-location/Goreme.jpg';
import Singapore from '../../../assets/images/business-location/London.jpg';
import Rome from '../../../assets/images/business-location/Dubai.jpg';
import NewYork from '../../../assets/images/business-location/Kuala-Lumpur.jpg';
import London from '../../../assets/images/business-location/Berlin.jpg';

const Pagearea = () => {
    const items: DataItem[] = [
        {
            Imgurl: ''+London,
            vcount: 12,
            name: 'London',
        },
        {
            Imgurl: ''+Toronto,
            vcount: 5,
            name: 'Toronto',
        },
        {
            Imgurl: ''+Singapore,
            vcount: 12,
            name: 'Singapore',
        },
        {
            Imgurl: ''+Tokyo,
            vcount: 5,
            name: 'Tokyo',
        },
        {
            Imgurl: ''+Rome,
            vcount: 12,
            name: 'Rome',
        },
        {
            Imgurl: ''+NewYork,
            vcount: 5,
            name: 'NewYork',
        },
    ];

    return (
        <section className="page-area section-padding-strict section-bg">

            <div className="container">

                <div className="row">

                    <div className="col-md-12">

                        <div id="directorist" className="atbd_wrapper directorist-w-100">
                            <div className="directorist-container-fluid">
                                <div className="atbd_location_grid_wrap atbdp-no-margin">
                                    <div className="directorist-archive-items directorist-archive-list-view">
                                    <LocationItem itemarray={items} className=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Pagearea;
