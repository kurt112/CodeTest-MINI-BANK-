import React, { Fragment, useEffect } from 'react'
import TransactionNav from './transaction-nav/transaction-nav'
import TransactionTable from './transaction-table/transaction-table'
import Loader from '../../loading/loading'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'
const Transaction = ({ change, transaction, initData }) => {

    useEffect(() => {
        initData()
    }, [initData])

    const Table = transaction.loading === true ? (<Loader />) : (<TransactionTable data={transaction.data}/>)

    const element = transaction.loading === true ? (<Loader />) : (<Fragment>
        <TransactionNav value={transaction.search} change={change} />
        {Table}
    </Fragment>)

    return element
}

const mapStateToProps = (state) => {
    return {
        transaction: state.transaction
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (event) => dispatch(actions.searchChange(event)),
        initData: () => dispatch(actions.initData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Transaction)