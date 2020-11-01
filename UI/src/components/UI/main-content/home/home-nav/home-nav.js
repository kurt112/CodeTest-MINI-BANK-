import React from 'react'



const HomeNav = ({showModalClicked,showDeposit}) => {

    return (
        <div className="nav-table">
            <div className="nav-table-items-left">
            <button className="waves-effect waves-light btn-small" onClick={showModalClicked}><i className="material-icons left">add_circle</i>Create Transaction</button>
            <button className="waves-effect waves-light btn-small" onClick={showDeposit}><i className="material-icons left">import_contacts</i>Transaction History</button>
            </div>
            <div className="nav-table-items-right">
                <input type="text" placeholder="Search in Transaction" className="browser-default" />
            </div>
        </div>
    )
}

export default HomeNav