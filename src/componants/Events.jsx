import React from 'react';
import Footer from "./footer";
import './Events.css';

function Event() {
    return (
        <div classname="background">
            <div class="background-image">
            
                <div >
            <p class="headline">
                <h1 class="main">Kindness Matters!</h1>
                Lions stand for peace and understanding,and we unite through kindness to<br></br>
                serve those in need.Your donation to LCIF's Refugees and Displaced perons<br></br>
                fund will help ensure that Lions are there to help them find the safety and<br></br>
                security they desperately need.
                </p>            
            </div>
            </div>


            <div class="image-second">
                <img src="https://media.istockphoto.com/id/1299146413/photo/volunteer-hands-holding-food-donations-box-with-grocery-products-on-white-desk.jpg?s=612x612&w=0&k=20&c=LjgFLOeKbnn3OypFrfpWWxFoYXmEq_EvODLJmJEFHkc=" alt="home" />
                <p class="second">
                WE SERVE<br></br>
                Through any challenge<br></br><br></br>
                Over 1.4 million Lions across the globe are stepping up to serve their communities during the coronavirus (COVID-19) pandemic These new challenges have changed the way we live, but our dedication to helping those in need is as strong as it was when we first opened our doors more than 100 years ago.
                </p>
                </div> 

            <div class="image-one">
            <p class="one">
            LCIF<br></br><br></br>
            Your Foundation for Service<br></br><br></br>
            LCIF is your foundation—and together, we can respond quickly for a powerful impact. Magnify your service.
            When caring people join together, roll up their sleeves and take action to make their community better, it’s a beautiful thing—and an incredible feeling for everyone involved. That’s Lions. Being a Lion is about leading by example, building relationships and improving the world through kindness.
            </p>
            <img src="https://www.epa.gov/sites/default/files/styles/medium/public/2015-11/manpic.jpg?itok=YnvEqbSe" alt="home" />
            </div>

            <div class="image-third">
                <img src="https://static.wixstatic.com/media/aaa20d_f9f69be56fc84b29a41bc30450f2975e~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/aaa20d_f9f69be56fc84b29a41bc30450f2975e~mv2.jpg" alt="home" />
            <p class="third">Lions serve safely<br></br><br></br>
            In these times of adversity, Lions around the world are safely answering the call to service. From food delivery for healthcare workers to providing medical supplies where they’re needed most, Lions and Leos are finding ways to show how kindness matters.</p>
            </div>
       
           <div>
            <Footer/>
           </div>
        
        </div>
    )
}
  
export default Event;