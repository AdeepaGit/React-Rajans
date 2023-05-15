
import React, { Component, useEffect, useState } from "react";
import './MembersPanel.css'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function MembersPanel({ userData }) {

  const [data,setData]=useState([]);
 // const[allImage,setAllImage]=useState([ ]);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./Login";
  };
   
  useEffect(() =>{
    getPostData();
  },[]);

  function getPostData(){
  fetch("http://localhost:5000/get-post", {
    method: "GET",
   
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data) 
      setData(data.data)
    })
    

 }
    
    return (
      
       <div className="MemberConatct">
         <div > 
          <h4>hellow <b> {userData.fname}</b> welcome to Members dash board</h4>
         
               <h5>  email :{userData.email}</h5>
         </div>
         <button className="btn btn-primary" onClick={logOut} >Log Out</button>

         <div>
         <MDBTable align='middle' className="membersnews ms-3">
      <MDBTableHead>
        <tr className='table-warning'>
          <th scope='col'>Comming up events</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      
      {data.map((i) => {
            return (
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={i.image}
                alt=''
                style={{ width: '500px', height: '500px' }}
                //className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{i.pTitle}</p>
                <p className='text-muted mb-0'>{i.pDescription}</p>
              </div>
            </div>
          </td>
          
          
          
          
        </tr>
       );
            })}
      </MDBTableBody>
    </MDBTable>
         </div>
        </div>
      
      
      
    );
  }

  