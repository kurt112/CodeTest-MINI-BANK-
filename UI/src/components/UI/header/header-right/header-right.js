import React from 'react'
import './header-right.css'
const headerRight = ({ user }) => {
    return (
        <div className="Right">
            <p>UserName: {user.username}</p> 
            <p>Amount:{user.amount}</p>
        </div>
    )
}

export default headerRight