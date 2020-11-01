import React from 'react'

const HomeNav = ({value,change}) => {
   
    return (
        <div className="nav-table">
            <div className="nav-table-items-left">
             
            </div>
            <div className="nav-table-items-right">
                <input type="text" placeholder="Search Anything" value={value} onChange={change} className="browser-default" />
            </div>
        </div>
    )
}

export default HomeNav