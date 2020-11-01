import React, { Fragment } from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
const Sidebar = ({ user }) => {
    return (
        <div className='Sidebar' >
            <div className="title">
                <p>Mini Bank</p>
            </div>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                {user.role === "Admin" ?
                    <Fragment>
                        <li><NavLink to="/user-list" exact>User List</NavLink></li>
                        <li><NavLink to="/transaction-list" exact>Transaction List</NavLink></li>
                    </Fragment>
                    :
                    null
                }
            </ul>
        </div >
    )
}


export default Sidebar