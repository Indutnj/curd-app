import Sidebar from './component/Sidebar';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Users from './component/Page';
import CreateUser from './component/CreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Del from './component/Del';
import Edit from './component/Edit';



function App() {
  let [users,setUsers]=useState([
    {
    
      name:"Ravi M",
      gender:"Male",
      dob:"1992-07-05",
      mobile:"9685961256",
      email:"ravi25@gmail.com"
    },
    {
    
      name:"Divya S",
      gender:"Female",
      dob:"1992-06-01",
      mobile:"9485624747",
      email:"divya88@gmail.com"
    },
    {
     
      name:"Kannan A",
      gender:"Male",
      dob:"1998-09-03",
      mobile:"7894562589",
      email:"kannan95@gmail.com"
    }
  ]);
  return (
    <>
      <BrowserRouter>
        <div class="d-flex" id="wrapper">
          <Sidebar/>
         {/* <Page/>*/}
            <Routes>
              <Route path="/page"  element={<Users users={users} setUsers={setUsers}/>}/>
              
              <Route path="/create-user" element={<CreateUser users={users} setUsers={setUsers}/>}/>
              <Route path="/edit" element={<Edit users={users} setUsers={setUsers}/>}/>
              <Route path="/del" element={<Del users={users} setUsers={setUsers}/>}/>
              <Route path="/edit-user/:id" element={<CreateUser users={users} setUsers={setUsers}/>}/>

            
              <Route path="*" element={<Navigate to='/page'/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;