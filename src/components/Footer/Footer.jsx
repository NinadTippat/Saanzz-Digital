import React from 'react'
import "./Footer.css"
import logo2 from "../../assets/logo2.png"
import Bounce from 'react-reveal/Bounce';


const Footer = () => {

  return (
  <footer className='container'>
    <div className="container2">
    <Bounce right><img src={logo2} alt="" /></Bounce>
    </div>
     <div class="container1">
      <p>&copy; 2023 Saanzz Digital. All Rights Reserved.</p>
    </div>
    <div className="container1">
      <a href="mailto:hi@saanzzdigital.com">Email - Hi@saanzzdigital.com</a>
      <br />
      <a href="tel:+9373000736">Phone no - +91 93722 77571</a>
    </div>
    <div className="container1">
        <a href="https://www.facebook.com/profile.php?id=100090389767483">Facebook - @saanzzdigital</a>
        <br />
        <a href="https://www.instagram.com/saanzzdigital/">Instagram - @saanzzdigital</a>
        <br />
        <a href="https://www.linkedin.com/company/saanzzdigital/">Linkded In - @saanzzdigital</a>
    </div>
</footer>

  )
}

export default Footer