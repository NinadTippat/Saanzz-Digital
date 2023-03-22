import React from 'react'
import "./Services.css" 
import Navbar from '../Navbar/Navbar';
import ServicesPageMainImg from "../../assets/ServicesPageMainImg.png"
import ServicePageimg1 from "../../assets/servicepage1.png"
import ServicePageimg2 from "../../assets/servicepage2.png"
import Cart1 from "../../assets/cart1.png"
import Cart2 from "../../assets/cart2.png"
import Cart3 from "../../assets/cart3.png"
import Cart4 from "../../assets/cart4.png"
import feature1 from "../../assets/feature1.png"
import feature2 from "../../assets/feature2.png"
import feature3 from "../../assets/feature3.png"
import feature4 from "../../assets/feature4.png"
import feature5 from "../../assets/feature5.png"
import feature6 from "../../assets/feature6.png"
import feature7 from "../../assets/feature7.png"
import feature8 from "../../assets/feature8.png"
import Footer from '../Footer/Footer';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import { Flip } from 'react-reveal';
import { Bounce } from 'react-reveal';
import { Zoom } from 'react-reveal';


const Services = () => {
  return (
    <div className='services'>
      <Navbar/>

      {/* Service Landing Page  */}
      <div className="services_landingPage">
        <div className="landingPage_right">
        <LightSpeed right><h1>Our Services</h1></LightSpeed>
        </div>
        <div className="landingPage_left">
         <LightSpeed left><img src={ServicesPageMainImg}/></LightSpeed>
        </div>
      </div>  

      {/* Service Body  */}
      <div className="service_body">
        <div className="service_body_left">
            <img src={ServicePageimg1} alt="" />
        </div>
        <div className="service_body_right">
        <Flip right><h2>A Digital Journey Where We Work Together & Win Together</h2></Flip>
          <br />
         <Flip left><p>Looking for engaging website content that builds trust and turns visitors into consumers? Saanzz Digital delivers high-quality material for every stage of your business, from web copy to social media posts. Our talented writers collaborate with you to create creative and effective solutions. Let our exceptional team help drive your business growth.</p></Flip>
        </div>
      </div>

      {/* Service body  */}
      <div className="service_body">
        <div className="service_body_right">
        <Flip right><p>Saanzz Digital has been assisting businesses of all sizes. We were established with the burning ambition to give brands the high-caliber content they require to compete in the market, and we will only stop working once we succeed. In short, we are a content agency that offers complete support, from content strategy to content delivery.</p></Flip>
        </div>
        <div className=" service_body_left">
          <img src={ServicePageimg2} alt="" />
        </div>
      </div>

      <div className="service_mid">
       <Bounce top><h1>Let Saanzz Digital Professionals Craft Optimum Language to Generate Leads for Your Company</h1></Bounce>
      </div>


      {/* Service Cart  */}

      <Zoom bottom><div className="services_cart">
        <div className="cart_left">
          <img src={Cart1} alt="" />
          <h1>End-To-End Marketing Strategy</h1>
          <p>An end-to-end marketing strategy involves developing and implementing a comprehensive marketing plan that covers all aspects of the customer journey, from brand awareness to customer retention.</p>
        </div>


        <div className="cart_right">
        <img src={Cart2} alt="" />
          <h1>Performance Marketing</h1>
          <p>Performance marketing is a type of online advertising where advertisers pay publishers when a specific action is completed, such as a click, form submission, or sale. It's a measurable way to drive conversions and increase revenue.</p>
        </div>
      </div></Zoom>

      <Zoom bottom><div className="services_cart">


        <div className="cart_left">
          <img src={Cart3} alt="" />
          <h1>SEO & SMO</h1>
          <p>Search Engine Optimization (SEO) and Social Media Optimization (SMO) are tactics used to increase organic traffic to your website. SEO involves optimizing your website and content to rank higher in search engine results pages. SMO involves optimizing your social media profiles and content to increase engagement and traffic.</p>
        </div>


        <div className="cart_right">
        <img src={Cart4} alt="" />
          <h1>Content Marketing</h1>
          <p>Content marketing involves creating and sharing valuable content to attract and retain a defined audience. It includes blog posts, videos, infographics, and social media posts, among others. The goal is to educate, entertain, or inform your audience, which can help establish your brand as a thought leader in your industry.</p>
        </div>
      </div></Zoom> 

      {/* Features */}
      <div className="our_features">
        <Bounce bottom><h1>Our Other Features</h1></Bounce>
      </div>

      <div className="features">
        <Zoom bottom>
        <div className="features_box">
          <img src={feature1} alt="" />
          <h1>Campaign Strategy</h1>
          <p>A campaign strategy involves the development of a plan to achieve a specific marketing objective. It includes the selection of marketing channels, target audience, messaging, and budget allocation.</p>
        </div>
        </Zoom>
        <Zoom bottom>
        <div className="features_box">
          <img src={feature2} alt="" />
          <h1>Blog writing</h1>
          <p>Blog writing is a form of content marketing that involves creating articles to attract and engage your target audience. Blogs can help establish your brand as an authority in your industry, drive traffic to your website, and generate leads.</p>
        </div></Zoom>
        <Zoom bottom>
        <div className="features_box">
          <img src={feature3} alt="" />
          <h1>Product Descriptions</h1>
          <p>Product descriptions are written content that describes your products or services. They should be engaging, informative, and optimized for search engines to drive traffic to your website</p>
        </div>
        </Zoom>
      </div>

      <div className="features">
        <Zoom bottom>
        <div className="features_box">
          <img src={feature4} alt="" />
          <h1>Email marketing</h1>
          <p>Email marketing involves sending promotional messages to a group of subscribers who have opted in to receive them. It's a cost-effective way to stay in touch with your audience, promote your products or services, and build customer loyalty.</p>
        </div>
        </Zoom>
        <Zoom bottom>
        <div className="features_box">
          <img src={feature5} alt="" />
          <h1>YouTube Scripts</h1>
          <p>We provide viewers with an engaging and well-written video script that will entice them to share the masterpiece with others.</p>
        </div>
        </Zoom>
        <Zoom bottom>
        <div className="features_box">
          <img src={feature6} alt="" />
          <h1>ChatBots</h1>
          <p>AI-powered chatbots can provide 24/7 customer support and improve customer engagement on websites and social media platforms. They can answer common customer questions, resolve issues, and provide product recommendations.</p>
        </div>
        </Zoom>
      </div>

      <div className="features thirdbox">
        <Zoom bottom>
        <div className="features_box">
          <img src={feature7} alt="" />
          <h1>Search Engine Marketing</h1>
          <p>AI-powered tools can help your venture optimize search engine marketing campaigns by analyzing customer behavior and search queries, identifying keywords and phrases that perform best, and providing data-driven insights for ad optimization.</p>
        </div>
        </Zoom>
        <Zoom bottom>
        <div className="features_box">
          <img src={feature8} alt="" />
          <h1>Programmatic Advertising</h1>
          <p>AI-powered programmatic advertising can help digital marketing agencies automate ad buying and optimization by analyzing customer data, identifying trends, and making real-time data-driven decisions.</p>
        </div>
        </Zoom>
      </div>
      
      <div className="our_features">
       <Bounce top><h1>Why trust us ?</h1></Bounce> 
      </div>

      {/* Why Trust Us */}
      <div className="why_trust_us">
        <div className='why_trust_us_left'>
        <Fade left> Come, let's work together!
          Don't rely on social media to communicate your story. </Fade> 
          <br />
        <Fade right>  Hire independent article writers instead who will listen to you. Saanzz Digital creates content that gives your company online recognition, generates leads, and converts site visitors into clients.</Fade>
        </div>
        <div className='why_trust_us_right'>
          <Fade left>
          <li>We only work with the best online content writers to ensure high-quality content.</li>
          <li>Our exceptional team of writers produces expertly researched, professionally edited, and 100% original content.</li></Fade>
          <br />
          <Fade right>
          <li>We have over 100 clients from different countries, and our repeat clients attest to the quality of our work.</li>
          <br />
          <li>Don't rely solely on social media to tell your story. Let our independent article writers create content that builds online recognition, generates leads, and converts visitors into clients. Work with us today!</li></Fade>
          <br />
        </div>
      </div>

      <Footer/>
    </div>

  )
}

export default Services