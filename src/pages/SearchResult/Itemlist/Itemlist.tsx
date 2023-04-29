import React from 'react';
import './Itemlist.scss';
import { DataItem } from "../../../components/SearchItem/SearchItem/ItemTypes";
import  SearchItems  from "../../../components/SearchItem/SearchItem";

import item1 from "../../../assets/images/CompanyItems/4-1.jpg"
import item2 from "../../../assets/images/CompanyItems/5-1.jpg"
import item3 from "../../../assets/images/CompanyItems/6-1.jpg"
import item4 from "../../../assets/images/CompanyItems/8-1.jpg"
import item5 from "../../../assets/images/CompanyItems/a.jpg"
import item6 from "../../../assets/images/CompanyItems/cat1.jpg"

import avatar from '../../../assets/images/team3.jpg';
const Itemlist = (sort_type : any) => {
    const type : Number = sort_type
    console.log(type);
    const items: DataItem[] = [
        {
            Imgurl: ''+item1,
            avatar: ''+avatar,
            name: 'Monitor Repair Service',
        },
        {
            Imgurl: ''+item2,
            avatar: ''+avatar,
            name: 'All American Lock and Key',
        },
        {
            Imgurl: ''+item3,
            avatar: ''+avatar,
            name: 'Monitor Repair Service',
        },
        {
            Imgurl: ''+item4,
            avatar: ''+avatar,
            name: 'All American Lock and Key',
        },
        {
            Imgurl: ''+item5,
            avatar: ''+avatar,
            name: 'Monitor Repair Service',
        },
        {
            Imgurl: ''+item6,
            avatar: ''+avatar,
            name: 'All American Lock and Key',
        },

    ];
    return (
        <div className="directorist-archive-items directorist-archive-list-view">
           <SearchItems itemarray={items} sort_type = {type}  className=''/>
        </div>
    );
};

export default Itemlist;
