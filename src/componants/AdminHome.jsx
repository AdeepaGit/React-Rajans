
import React, { Component, useEffect, useState } from "react";
import './MembersPanel.css'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBTextArea, MDBInput } from 'mdb-react-ui-kit';

export default function AdminHome({ userData }) {
    const [data,setData]=useState([]);
    const [image,setImage]=useState("");
    const [pTitle,setPTitle] =useState("");
    const [pDescription,setPDescription] =useState("");
    useEffect(() =>{
      getAllUser();
    },[]);
    const getAllUser = () =>{
        fetch("http://localhost:5000/getAllUser", {
            method: "GET",
       })
       .then((res) => res.json())
         .then((data) => {
           console.log(data, "userData");
           setData(data.data);
         });
    };
    const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./Login";
  };
  const deleteUser = (id,name) =>{
    if(window.confirm(`Are you sure you want to delete ${name}`)){
        fetch("http://localhost:5000/deleteUser", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userid:id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
                alert(data.data);
                getAllUser();
            });
    }
    else{

    }
  };
  function convertToBase64(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = error => {
      console.log("Error:",error);
    };
  }
  function uploadPost()
  {
    fetch("http://localhost:5000/member-post", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                pTitle,
                base64:image,
                pDescription
                
            }),
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
 
}
    
    return (
      
       <div className="MemberConatct">
        <button className="btn btn-primary logoutBtn" onClick={logOut} >Log Out</button>
        <div > <h4>hellow Admin <b> {userData.fname}</b> welcome </h4>
         
         </div>
        
         <MDBTable align='middle' className="UserTable ms-3">
      <MDBTableHead>
        <tr className='table-warning'>
          <th scope='col'>Name</th>
          
          <th scope='col'>User Type</th>
         
          <th scope='col'>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {data.map((i) => {
            return (
                
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{i.fname}</p>
                <p className='text-muted mb-0'>{i.email}</p>
              </div>
            </div>
          </td>
          
          <td>
            <MDBBadge color='success' pill>
            {i.userType}
            </MDBBadge>
          </td>
          
          <td>
            <MDBBtn color='link' rounded size='sm' onClick={() => deleteUser(i._id,i.fname)}>
              Delete
            </MDBBtn>
          </td>
        </tr>
       );
    })}
      </MDBTableBody>
    </MDBTable>
    <div className="adminPost">
      <div className="auth-wrapper">
      <div className="auth-inner" style={{ width:"auto" }}>

        <h3>admin post</h3>
        
        <MDBInput value={pTitle} name="pTitle" onChange={(e) => setPTitle(e.target.value)} id="pTitle" label="pTitle " className='w-100' required/>
         
        <br />
        <input 
        accept="image/*"
        type="file"
        onChange={convertToBase64}
        />
       
        <br />
        {image==="" || image===null?"":   <img width={100} height={100} src={image}/> }
        <br />
       
        <MDBTextArea label='Message' 
        id='pDescription' name="pDescription" 
        onChange={(e) => setPDescription(e.target.value)}
        value={pDescription} 
        rows={4} />
        <button onClick={uploadPost}>Post</button>
      </div>
 
      </div>
     
    </div>
    
    </div>
      
      
      
    );
  }


  