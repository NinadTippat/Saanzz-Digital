import React from 'react'
import "./About.css"
import whoweare from "../../assets/whoweare.png"
import our_pride from "../../assets/our_pride.png"
import our_mission from "../../assets/mission.png"
import Footer from '../Footer/Footer'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Navbar from '../Navbar/Navbar'
import about from "../../assets/about.png"
import Roll from "react-reveal/Roll"
import LightSpeed from 'react-reveal/LightSpeed';
import vision from "../../assets/vision.png"


const About = () => (
  <div className='about'>
    <Navbar />

    {/* About us  */}
    <div className="about_us">
      <div className="aboutPage_right">
        <LightSpeed right><h1>About Us</h1></LightSpeed>
      </div>
      <div className="aboutPage_left">
        <LightSpeed left> <img src={about} /></LightSpeed>
      </div>
    </div>

     {/* About content  */}
    <div className="about_content">
      <div className="about_content_left">
        <Fade right><h1>Who are we ?</h1></Fade>
        <Fade left><p>Saanzz Digital was founded in 2020. It started with the idea of discovery. Discovery of the next Digital revolution.
        </p></Fade>
        <br />
        <Fade right> <p>We specialize in content and work with companies worldwide to create remarkable content in a true sense—and we don't just mean that in terms of quality. We mean "real good" in generating interest, increasing traffic, and establishing brands.</p></Fade>
        <br />
        <Fade left><p>Midway through, we learned that content creation was only half the story. Reaching the consumers with it was the other half. A brand needs content marketing to be holistic. So we expanded our product line to make sure that companies not only presented their message and convinced people to listen to it, generating traffic and leads.
        </p></Fade>
        <br />
        <Fade right>  <p>We provide content writing services to help new and established businesses succeed online on current and emerging platforms. In addition, we offer complete Content Marketing and Strategy solutions to assist companies in achieving their goals for organic growth.
        </p></Fade>
        <br />
        <Fade left> <p>Saanzz Digital is a remarkable team of creative thinkers, dreamers, and innovators.</p></Fade>
      </div>
      <div className="about_content_right">
        <Zoom left><img src={whoweare} alt="" /></Zoom>
      </div>
    </div>

     {/* Our mission  */}
    <div className="our_mission">
      <div className="our_mission_left">
        <Slide left><h1>Our Mission</h1></Slide>
        <br />
        <Slide right><h4>We aim for the best content.</h4></Slide>
        <br />
        <Slide left><p>Every Brand has a story to tell. However, finding the right words to express what you're trying to say takes time. And that's where a company like Saanzz Digital comes in for the rescue. With our expertise and your zeal, we can fineness this game.</p></Slide>
        <br />
        <Slide right><p>Regardless of the type of business, the material may cover many topics, but the ultimate purpose of increasing brand awareness and loyalty remains constant. We believe in creating engaging and exciting content that tells a story.
        </p></Slide>
        <br />
        <Slide left><p>Saanzz Digital aims to boost website traffic, leads, and conversions to assist businesses in expanding and succeeding. In addition, Saanzz Digital seeks to assist companies in achieving their objectives through its sales and marketing strategies.
          Our only goal is to add value for our clients.
        </p></Slide>
      </div>
      <div className="our_mission_right_box">
        <img className='our_mission_right' src={our_mission} alt="" />
      </div>
    </div>


    <div className="ourvision">
          <div className='our_mission_right_box'>
            <img className='ourvision_right' src={vision} alt="" />
          </div>
          <div className="ourvision_left">
          <Slide left> <h1>Our vision</h1></Slide>
          <br />
          <Slide right> <h4>Need a tonne of professional business-to-business marketing strategies produced quickly? Do you want a reliable, proficient approach?</h4></Slide>
          <br />
          <Slide left>  <p>We, the Saanzz Digital team, are here for you. We are a group of talented and young content writers. We have produced content for a variety of platforms.</p></Slide>
          <br />
          <Slide right><p>We have helped businesses of all scales and young professionals enhance the quality of their social media blogs, articles, SOPs, and other content.</p></Slide>
          <br />
          <Slide left><p>We have grown steadily over the years because we know precisely what a brand wants and can utilize content marketing to benefit our clients.</p></Slide>
          </div>
    </div>

    <Footer />

  </div>
)

export default About

