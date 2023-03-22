import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Home.css"
import "../Contact/Contact.css"
import landing_page_icons from "../../assets/landing_page_icons.png"
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HomePage1 from "../../assets/homepage1.jpg"
import what_we_do from "../../assets/whatwedo.png"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import our_pride from "../../assets/our_pride.png"
import logo2 from "../../assets/logo2.png"
import Contact2 from "../../assets/contact2.png"
import { Link } from 'react-router-dom';
import feedback from "../../assets/feedback.png"
import { Bounce } from 'react-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const notify = () => toast("Form Submitted Successfully!");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    notify();
    emailjs.sendForm('service_en04zem', 'template_5r1tweu', form.current, 'AC92_C5-eGDoaO7iP')
      .then((result) => {
          console.log(result.text);
          document.getElementById('name').value='';
          document.getElementById('email').value='';
          document.getElementById('phone').value='';
          document.getElementById('message').value='';
      }, (error) => {
          console.log(error.text);
      })
      
  };
  
  return (
    <div className='home'>
      <Navbar/>

      <div className="homepage">
        <div className="homepage_left">
        <LightSpeed left> <h1><span className='saanzz_color'>Saanzz</span><span className='digital_color'>Digital</span></h1></LightSpeed>
       <p className='discovery'> A Digital Journey Where We Work Together & Win Together</p>
       <Link to="/services"><p className='keywords'>| Content Writing | Website Development |<br />| Digital Marketing | End-to-end Marketing | SEO | <br />| Social Media Management |</p></Link>
        </div>
        <div className="homepage_right">
        <LightSpeed leftz> <img className='landing_page_icons' src={landing_page_icons} alt="" /></LightSpeed>
        </div>
      </div>
      
      <div className="homepage_connect_with_us_title">
      <Flip right><h1>Get In Touch</h1></Flip>
      </div>

      <div className="contact_body">
        <div className="contact_body_left">
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact_body_right">
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name="user_name" id='name' />
            <label>Email</label>
            <input placeholder='Enter your email' type="email" name="user_email" id='email' />
            <label>Phone</label>
            <input placeholder='Enter your phone no' type="phone" name="user_phone_no" id='phone' />
            <label >Message</label>
            <textarea placeholder='Enter your message' className='contact_page' id='message' name="user_message" />
            <button className='submit' type="submit" value="Submit">Submit</button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />

      <div className="what_we_do_title">
      <Bounce top><h1>What we do?</h1></Bounce>
      </div>


      <div className="what_we_do">
        <div className="do_left">
          <img src={what_we_do} alt="" />
        </div>
       <div className="do_right">
       <Flip right> 
        To engage with your visitors, your website needs compelling content.
        <br /> The first step in turning visitors into consumers is gaining people's trust, which can only be accomplished through engagement.
        <br /> If you are searching for this, you are at the right place.</Flip>
        </div>
      </div>

   ``   {/* Our Pride */}

        <div className="our_pride">
          <div className="ou_pride_left">
            <img src={our_pride} alt="" />
          </div>
          <div className="ourpride_content">
          <Flip right><h1>Our Pride</h1></Flip>
         <Flip left><p>At Saanzz Digital, we take great pride in our track record of fostering growth through our services for digital transformation. We are also proud of the hard work our creative and devoted staff members put out to assist our clients in achieving their marketing goals.
          </p></Flip>
          <br />
          <Flip right> <p>Our commitment to providing our clients with digital expertise sets us apart from the competition and drives us to achieve our objectives.
          </p></Flip>
          <br />
          <Flip left> <p>Our assets are quality, quick delivery, and creativity.
          </p></Flip>
          </div>
        </div>
        <div className="ourpride_bottom">
        <Bounce bottom><h3>Let's make a difference together.</h3></Bounce> 
          <br />
         <Bounce top><p>What is good is merely a place to start, and there is always room for development. And thus, we contribute to achieving these goals, pushing the boundaries and further improving our capabilities.
          </p></Bounce>
        </div>

            {/* Why Saanzz Digital */}
        <div className='why_saanzz_digital'>
            <div className="why_saanzz_digital_left">
            <Bounce left><h1 className='why_saanzz'>Why Saanzz Digital?</h1></Bounce>
            <Bounce right> <p>We have the advantage of being quick, approachable, responsible, flexible, and dynamic as a founder-led company. We have mastered delivering scalability and reach for domestic and international clients.
              <br />
              <br />
               Our staff includes some of the best writers and editors in the business, as well as visionary artists, and that's what makes us unique. We are a profitable business. The goal is to present a powerful story and make it heard.
            </p></Bounce>
            </div>
            <div className="why_saanzz_digital_right">
            <Zoom top><img src={logo2} alt="" /></Zoom>
            </div>
        </div>
        
          <div className="feedback">
            <h1 className='feedback_heading'>Feedback from Clients</h1>
            <p>Why you should trust our company.</p>
            <div className="feedback_boxes">
            <div className="feedback_box">
               <p>Excellent services delivered. I am very much happy with the work.</p> 
               <p className='client_name'>- Nisha Jayakumar</p>
              </div>
              <div className="feedback_box">
               <p>Wonderful digital service! Timely delivery and quick response by the team.</p> 
               <p className='client_name'>- Inderpreet Kaur</p>
              </div>
              <div className="feedback_box">
                <p>We are associated with Saanzz Digital for last 2 years. They are brilliant with complete Digital Marketing strategy and execution. We are really happy with their Services.</p>
                <p className='client_name'>- Manish Pokale</p>
              </div>
              <div className="feedback_box">
                <p>Really appreciate the skills & competency the team has. They are very responsive and prompt in execution. My content was delivered in a short time span with no compromise on quality.</p>
                <p className='client_name'>- Shelly Soni</p>
              </div>
            </div>
          </div>
      <Footer/>

    </div>
  )
}

export default Home