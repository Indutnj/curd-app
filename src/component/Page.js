import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function Page({users,setUsers}) {
  
    let navigate = useNavigate()
    // let handleDelete = (i)=>{
    //     let newArray = [...users]
    //     newArray.splice(i,1)
    //     setUsers(newArray)
    // }
  return <>
<div className='container-fluid bg-dark' >
    <div className='container-fluid bg-dark' style={{color: 'white', width:"1000px"}}>
      <br></br>
      <h3 style={{color: 'lavender', textAlign:"center"}}>Users List</h3>
      <br></br>

         <div id="content-wrapper" className="d-flex flex-column">
<div id="content">
    <div className="container-fluid">
        <div className='container-fluid'>
        <Table striped bordered hover variant="dark">
      <thead class="thead-primay">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
        
        </tr>
      </thead>
      <tbody>
         {
            users.map((e,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.dob}</td>
                  
                </tr>
            })
         }
      </tbody>
    </Table>
        </div>
    </div>

</div>
</div>
</div>
</div>
  </>
}

export default Page