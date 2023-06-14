import React from 'react'
import { Link } from 'react-router-dom';


function Sidebar() {
   /* let navigate = useNavigate()*/
  return (
    <>
        <div className="border-end bg-black" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-info">CRUD Application</div>
            <div className="list-group list-group-flush">
            <Link to='/users'> 
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">View List Users</a>
            </Link>
            <Link to='/create-user'>
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Create User</a>
            </Link>
            <Link to='/edit'>
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Edit</a>
            </Link>
            <Link to='/del'>
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Delete</a>
            </Link>
            
            </div>
        </div>
    </>
  )
}

export default Sidebar