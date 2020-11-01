import React from 'react'

const HomeNav = ({change, value}) => {
    return (
        <div className="nav-table">
            <div className="nav-table-items-left">
              
            </div>
            <div className="nav-table-items-right">
                <input type="text" onChange={change} placeholder="Search Anything" className="browser-default" value={value}/>
            </div>
        </div>
    )
}

export default HomeNav