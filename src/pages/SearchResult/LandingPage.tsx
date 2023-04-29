import React from 'react';
import './LandingPage.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Headbar from "./Headbar/Headbar";
import Itemlist from "./Itemlist/Itemlist";
import Breadcrumb from "../../components/Breadcrumb/breadcrumb";

const LandingPage: React.FC = (type) => {
const sort_type : any = type;
    return (
        <div className="directorist-content-active">
            <Header/>
            <div className="elementor elementor-37">
                <Breadcrumb title = "Search Result" className=''/>
            <div data-elementor-type="wp-page" data-elementor-id="2580" className="elementor elementor-2580">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-a9e17fc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a9e17fc" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d9e8f12" data-id="d9e8f12" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-79c9856 elementor-widget elementor-widget-search_result" data-id="79c9856" data-element_type="widget" data-widget_type="search_result.default">
                                <div className="elementor-widget-container">
                                    <div className="directorist-archive-contents directorist-instant-search" data-atts="{&quot;view&quot;:&quot;grid&quot;,&quot;orderby&quot;:&quot;date&quot;,&quot;order&quot;:&quot;desc&quot;,&quot;listings_per_page&quot;:&quot;6&quot;,&quot;header&quot;:&quot;yes&quot;,&quot;columns&quot;:&quot;3&quot;,&quot;show_pagination&quot;:&quot;yes&quot;,&quot;map_height&quot;:&quot;&quot;,&quot;logged_in_user_only&quot;:&quot;no&quot;,&quot;redirect_page_url&quot;:&quot;&quot;,&quot;directory_type&quot;:&quot;&quot;,&quot;default_directory_type&quot;:&quot;general&quot;,&quot;_current_page&quot;:&quot;search_result&quot;}">

                <Headbar />
                <Itemlist sort_type = {sort_type}/>
                
                                   </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
              </section>
          </div>
      </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
