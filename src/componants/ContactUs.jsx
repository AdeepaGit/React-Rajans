import React from 'react'
import './ContactUs.css' ; 
import Footer from "./footer";
import background2 from '../Images/background2.jpg';
import {Card,CardGroup} from 'react-bootstrap';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
    return (
      <>
       <div className="conatct">
                 <img src={background2} className='hero' alt=''/>
                 <div className="heroContent">
                      <div className="row">
                          <div style={{fontSize:'20px',fontWeight:'bolder'}}>GET IN TOUCH</div>
                      </div>
                      <div className="row">
                          <div style={{fontSize:'40px',fontWeight:'bold'}}>Contact us</div>
                      </div>
                 </div>  
       </div>
       <div className="details">
       <CardGroup className='container'>
         <div className='cards'>
          <div className="tele-container ">
              <BsTelephone className='tele'/>
          </div> 
          <Card.Body>
            <Card.Title className='text-center'>Phone</Card.Title>
            <Card.Text>
            <p className='contact-para'>Start working with Starty that can provide everything. </p><br/>
             <h5 className='email text-start'>+11 2222222</h5>
            </Card.Text>
          </Card.Body>
          </div>
          <div className='cards'>
          <div className="mail-container">
          <HiOutlineMail className='mail'/>
          </div>   
          <Card.Body>
            <Card.Title className='text-center'>Email</Card.Title>
            <Card.Text>
            <p className='contact-para'> Start working with Starty that can provide everything. </p>
            <span className='email'>contact@example.com</span>
            </Card.Text>
          </Card.Body>
        </div>
        <div className='cards'>
          <div className="location-container">
            <HiOutlineLocationMarker className='location'/>
          </div>
          
          <Card.Body>
            <Card.Title className='text-center'>Location</Card.Title>
            <Card.Text>
            <p className='contact-para'>C/54 Northwest Freeway, Suite 558,
                 Houston, USA 485 </p>
            </Card.Text>
          </Card.Body>
         
        </div>
      </CardGroup>
       </div>
       <div className='discription , container'>
        <span>Get In Touch !</span> <br />
        <p className='para'>Our design projects are fresh and simple and will benefit your business greatly. 
        Learn more about our work! </p>
       </div>
  
      <div>
        <Footer/>
      </div>
      
      </>
      
    )
  };
  
  export default Contact;
  