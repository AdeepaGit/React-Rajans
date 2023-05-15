//imports the necessary modules and libraries used in the `Login` component.
import React, { useState } from "react";

import { Link } from "react-router-dom";

import './Login.css'
import {
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput, 
}
from 'mdb-react-ui-kit';


//Login component
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
            //Send a POST request to  user
        fetch("http://localhost:5000/login-user", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userLogin");
              if (data.status == "ok") {
              
                alert("login successful");
                window.localStorage.setItem("token", data.data);
                
                window.localStorage.setItem("loggedIn", true);
                window.location.href="./AdminPanal";
                
               // props.history.push('/Dashboard');
               // window.location.reload(false);
              } else {
                alert("Something went wrong");
              }
            });
            setEmail("");
            setPass("");
        };
     

    return (
  <div className="backgroundcol">
  <form className="register-form" onSubmit={handleSubmit} >
  <MDBContainer fluid className="content logConten">
  <MDBCard className='text-black m-5 loginsize ' >
  <MDBCardBody>
    <MDBRow>
      <MDBCol  md='8' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
        <h4 className="text-center bold h1 fw-bold mb-5 mx-1 mx-md-4 mt-2">Login</h4>
      
                <div className="d-flex flex-row align-items-center mb-2 ">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" label='email'  className='w-100' type="text" required/>
                </div>
  
                <div className="d-flex flex-row align-items-center mb-2">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput value={password} onChange={(e) => setPass(e.target.value)} type="password" label="Password" id="password" name="password" required/>
                </div>
  
                <div className="d-flex flex-row align-items-center mb-2">
                   <button type="button" class="btn btn-primary" variant="primary" value={"Submit"} onClick={handleSubmit}>Login </button>
                  </div>
                 <div className="d-flex flex-row align-items-center mb-4"></div>
                 <div className="d-flex flex-row align-items-center mb-4">
                   <Link to="/Register" >Already registered? Login </Link>
                 </div>
               

              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center loglionImg'>
  </MDBCol>
</MDBRow>
</MDBCardBody>
</MDBCard>
</MDBContainer>
</form>
</div>
    );

}
export default Login;