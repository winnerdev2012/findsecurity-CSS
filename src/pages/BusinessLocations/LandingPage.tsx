import React from 'react';
import './LandingPage.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Pagearea from "./Page-area/Page-area";
import Breadcrumb from "../../components/Breadcrumb/breadcrumb";

const LandingPage: React.FC = () => {

    return (
        <div className="directorist-content-active">
            <Header/>
            <div className="elementor elementor-37">
            <Breadcrumb title = "Business Location" className=''/>
                <Pagearea />
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
