//imports the necessary modules and libraries used in the `Register` component.
import React,{useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Link } from "react-router-dom";
import "./Register.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRadio 
}
from 'mdb-react-ui-kit';

//Register component
export const Register = (props) => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    //const [uname, setUName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [userType, setUserType] = useState('');
    const [secretkey, setSecretkey] = useState('');

    //Function to handle form submission

    const handleSubmit = (e) => {
      if(userType==="Admin" && secretkey!=="Admin"){
        e.preventDefault();
        alert("Invalid Admin")
      }else{
        if(userType===""){
        e.preventDefault();
        alert("please Select User Type")
        }else{
          e.preventDefault();
        console.log(fname,lname,email,password);

        //Send a POST request to register user
        
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                password,
                userType
                
            }),
          })
            .then((res) => res.json()) // Convert response to JSON format
            .then((data) => {
              console.log(data, "userRegister");
              if (data.status === "ok") {
                alert("Registration Successful");
                window.location.href="./Login";
                //props.history.push('/Login'); // Navigate to login page
                //window.location.reload(false);
              
            } else if (data.status === "User exists") {
                alert("This email address alredy exists.");
              
              } else {
                alert("Something went wrong");
              }
          }); 
      }}
       // clear form fields after form submission
            setFName("");
            setLName("");
            setEmail("");
            setPass("");
             
        };
    
    
    //render registration form
    return (  
<div className="backgroundcol">
<form className="register-form" onSubmit={handleSubmit} >    
<MDBContainer fluid className="content RegCont" >
<MDBCard className='text-black Regcard'>
  <MDBCardBody>
    <MDBRow>
      <MDBCol  md='2' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <h4 className="text-center bold h1 fw-bold mb-3 mx-1 mx-md-4 mt-1">Register</h4>
        <div class="d-flex flex-row align-items-center mb-2">
          <MDBRadio name='UserType' id='flexRadioDefault1' label='User' value="User" 
          onChange={(e)=> setUserType(e.target.value)}  inline />
          <MDBRadio name='UserType' id='flexRadioDefault1' label='Admin' value="Admin" 
          onChange={(e)=> setUserType(e.target.value)} inline />
        </div >
         {userType==="Admin"? (
          <div className="d-flex flex-row align-items-center mb-2 ">
          <MDBIcon fas icon="user-secret me-3" size='lg'/>
          <MDBInput value={secretkey} name="secretkey" onChange={(e) => setSecretkey(e.target.value)} id="secretkey" label="Secret Key" className='w-100' required/>
         </div>
         ): null}
        

         <div className="d-flex flex-row align-items-center mb-2 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput value={fname} name="fname" onChange={(e) => setFName(e.target.value)} id="fname" label="First Name" className='w-100' required/>
         </div>

        <div className="d-flex flex-row align-items-center mb-2 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput value={lname} name="lname" onChange={(e) => setLName(e.target.value)} id="lname" label="Last Name" className='w-100' required/>
        </div>
      
        <div className="d-flex flex-row align-items-center mb-2">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" label="email@gmail.com" id="email" name="email"className='w-100'  required/>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput value={password} onChange={(e) => setPass(e.target.value)} type="password" label="Password" id="password" name="password" required/>
        </div>

        <div className="d-flex flex-row align-items-center mb-1">
        <button type="button" class="btn btn-primary" variant="primary" value={"Submit"}onClick={handleSubmit}>Register </button>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
        <Link to="/Login" >Already registered? Login </Link>
        </div>

      </MDBCol>
      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center registerImg'>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>
</MDBContainer>
</form>
</div> 
);
}
export default Register;