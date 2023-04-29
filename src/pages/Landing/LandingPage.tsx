import React from 'react';
import './LandingPage.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionFinder from "./SectionFinder/SectionFinder";
import TopBusinessCategory from "./TopBusinessCategory/TopBusinessCategory";
import BusinessProviders from "./BusinessProviders/BusinessProviders";
import PostYourService from "./PostYourService/PostYourService";
import Clients from "./Clients/Clients";
import DownloadApp from "./DownloadApp/DownloadApp";

const LandingPage: React.FC = () => {

    return (
        <div className="directorist-content-active">
            <Header/>
            <div className="elementor elementor-37">
                <SectionFinder />
                <TopBusinessCategory />
                <BusinessProviders />
                <PostYourService />
                <Clients />
                <DownloadApp />
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
