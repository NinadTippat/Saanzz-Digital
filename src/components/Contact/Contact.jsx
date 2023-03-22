import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css"
import Navbar from '../Navbar/Navbar'
import ContactPageMainImg from "../../assets/ContactPageMainImg.png"
import LightSpeed from 'react-reveal/LightSpeed';
import Contact2 from "../../assets/contact2.png"
import Footer from '../Footer/Footer';
import Bounce from 'react-reveal/Bounce'

const Contact = () => {
  const notify = () => toast("Form Submitted Successfully!");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify();
    emailjs.sendForm('service_en04zem', 'template_5r1tweu', form.current, 'AC92_C5-eGDoaO7iP')
      .then((result) => {
          console.log(result.text);
          document.getElementById("name").value='';
          document.getElementById("email").value='';
          document.getElementById("phone_no").value='';
          document.getElementById("message").value='';
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <div className='contact'>
      <Navbar/>
      <div className="contact_landingPage">
       <LightSpeed right>
        <div className="contact_landingpage_right">
        <h1>Contact Us</h1> 
        </div>
        </LightSpeed>
        <div className="contact_landingpage_left">
         <LightSpeed left><img src={ContactPageMainImg}/></LightSpeed>
        </div>
      </div> 

      <div className="contact_body">
        <div className="contact_body_left">
      <Bounce top>
          <div className='details'>
            <p>E-Mail - Hi@saanzzdigital.com</p>
            <p>Phone - +91 93722 77571</p>
            <p>Instagram - @saanzzdigital</p>
            <p>Facebook - Saanzz Digital</p>
          </div>
      </Bounce>
        </div>
      
      <form ref={form} onSubmit={sendEmail} className="contact_body_right">
        <label>Name</label>
        <input placeholder='Enter your name' type="text" name="user_name" id='name' />
        <label>Email</label>
        <input placeholder='Enter your email' type="email" name="user_email" id='email' />
        <label>Phone</label>
        <input placeholder='Enter your phone no' type="phone" name="user_phone_no" id='phone_no'/>
        <label>Message</label>
        <textarea placeholder='Enter your message' className='contact_page' name="user_message" id='message' />
        <button className='submit' type="submit" value="Submit">Submit</button>

        {/* <input type="submit" value="Send" /> */}
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
      <Footer/>

    </div>
  )
}

export default Contact