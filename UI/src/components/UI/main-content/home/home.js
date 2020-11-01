import React, { Fragment, useState } from 'react'
import HomeNav from './home-nav/home-nav'
import HomeTable from './home-table/home-table'
import Loader from '../../loading/loading'
import TransactionCreate from '../transaction-list/transaction-create/transaction-create'
import BackDrop from '../../../utility/backDrop/backDrop'
import { connect } from 'react-redux'
const Home = ({ user}) => {

    const [modal, setModal] = useState(false)

    const showModalClicked = () => {
        setModal(!modal)
    }

    const Table = user.loading === true ? (<Loader />) : (<HomeTable data={user.transactions} />)

    const element = user.loading === true ? (<Loader />) : (<Fragment>
        {
            modal === true ?
                (
                    <Fragment>
                        <BackDrop />
                        <TransactionCreate showModalClicked={showModalClicked} />
                    </Fragment>
                ) : null}
        <HomeNav
            showModalClicked={showModalClicked}
        />
        {Table}
    </Fragment>)

    return element
}

const mapStateToProps = (state) => {
    return {
        user: state.userLogin.user
    }
}



export default connect(mapStateToProps)(Home)