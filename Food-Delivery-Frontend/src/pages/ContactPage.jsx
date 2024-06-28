import React from 'react'
import zeina from '../assets/images/zeinas-img.jpeg';
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const ContactPage = () => {
  return (
    
    <div className="container">
    <div className="contact-form">
      <h2>Reach out to us!</h2>
      <h5>
        Our customer care team is here to provide you with all the support you need.  Whether you have a question or want to get in touch, just fill out the form below.
      </h5>
      <form>

        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>

          <button type="submit">Send</button>
        </form>
      </div>
      <div className="customer-care">
        <h2>Customer Care</h2>
        <h5>
          Our customer care team is available to answer your questions and provide support.  Whether you need help with our products or just have a general inquiry, our friendly staff is here to give you the best service. 
        </h5>
      
        <div className="team-member">
          <img src={zeina} alt="Profile Picture" />
          <p>Zeina is our Customer Service Manager. <br />
          
            <div className='ways'> 
              <a href="zeina@delivery.com"> <MdEmail />  </a>
              <a href=""> <BsFillTelephoneFill /> </a>
            </div>
          </p>
        </div>

        <div className="team-member">
          <img src="" alt="Profile Picture" />
          <p>Ayoub is our Customer Service Representative.
            <div className='ways'> 
              <a href="ayoub@delivery.com"> <MdEmail />  </a>
              <a href=""> <BsFillTelephoneFill /> </a>
            </div>
            </p>
        </div>

        <div className="team-member">
          <img src="" alt="Profile Picture" />
          <p>Guilherme is our Customer Service Representative. 
            <div className='ways'> 
              <a href="guilherme@delivery.com"> <MdEmail />  </a>
              <a href=""> <BsFillTelephoneFill /> </a>
            </div>
          </p>
        </div>
          <div className='ways'>
            <p>Other ways to connect: 
              <a href="https://www.facebook.com">
              <FaFacebook />
              </a>
              <a href="https://twitter.com">
              <FaXTwitter />
              </a>
            </p>
          </div>
      </div>
        
      </div>
    
    
  );
};

export default ContactPage;
