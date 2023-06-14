import React, { useState } from "react";
export const UsersContext=React.createContext()

function UserContextComponent({children})
{
    let [users,setUsers]=useState([
        {
        
          name:"Ravi M",
          gender:"Male",
          dob:"01-11-1992",
          mobile:"9685961256",
          email:"ravi25@gmail.com"
        },
        {
        
          name:"Divya S",
          gender:"Female",
          dob:"06-05-1992",
          mobile:"9485624747",
          email:"divya88@gmail.com"
        },
        {
         
          name:"Kannan A",
          gender:"Male",
          dob:"06-07-1995",
          mobile:"7894562589",
          email:"kannan95@gmail.com"
        }
      ]);

  return <>
    <UsersContext.Provider value={{users,setUsers}}>
        {children}
    </UsersContext.Provider>
  </>
}

export default UserContextComponent