import React, { Fragment, useEffect } from 'react'
import HomeNav from './user-list-nav/user-list-nav'
import HomeTable from './user-list-table/user-list-table'
import Loader from '../../loading/loading'
import * as actions from '../../../../store/actions/index'
import { connect } from 'react-redux'
const UserList = ({ user, initData, change }) => {
    useEffect(() => {
        initData()
    }, [initData])


    const Table = user.loading === true ? (<Loader />) :
        (<HomeTable data={user.data} />)

    const element = user.loading === true ? (<Loader />) : (<Fragment>
        <HomeNav change={change} value={user.search} />
        {Table}
    </Fragment>)

    return element
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (event) => dispatch(actions.UsersearchChange(event)),
        initData: () => dispatch(actions.UserinitData())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(UserList)