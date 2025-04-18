import { useState } from "react";
import "../css/contact.css";

import Contact_img from "../assets/satellite.jpg";

function Contact() {


  return (
    <div className="contact_body" style={{ backgroundImage: `url(${Contact_img})` }}>
      <div className="container">
        <h1 style={{color:"black"}}>Contact Us</h1>
        
        <div className="contact-info">
            <div className="creator">
                <h3>Ayush Pathak</h3>
                <p>Email: <span>Payush3103@gmail.com</span></p>
            </div>
            <div className="creator">
                <h3>Ankur Sharma</h3>
                <p>Email: <span>ankursharmajit@gmail.com</span></p>
            </div>
            <div className="creator">
                <h3>Anirudh Sripada Koudninya M</h3>
                <p>Email: <span>anirudhsripada05@gmail.com</span></p>
            </div>
        </div>

        <div className="social-media">
            <h2>Follow Us</h2>
            <a href="#">Twitter</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">LinkedIn</a>
        </div>
    </div>
    </div>
    
  );
}

export default Contact;
