import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import './transaction-create.css'
import * as actions from '../../../../../store/actions/index'
const TransactionCreate = ({ showModalClicked, depositClicked, withdrawClicked, user,depositChange, withdrawChange, transferChange}) => {
    const [transaction, setTransaction] = useState(
        <Fragment>
            <div className='transaction-input'>
                <p>Withdraw Amount</p>
                <input type='number' className='browser-default' value={user.withdrawValue} onChange={withdrawChange.bind()} placeholder="Enter Amount" />
            </div>
            <div className='transaction-confirmation'>
                <button onClick={withdrawClicked}>Confirm</button>
            </div>
       
        </Fragment>
    )

    const withraw = () => {
        setTransaction(
            <Fragment>
                <div className='transaction-input'>
                    <p>Withdraw Amount</p>
                    <input type='number' className='browser-default' value={user.withdrawValue} onChange={withdrawChange.bind()} placeholder="Enter Amount" />
                </div>
                <div className='transaction-confirmation'>
                    <button onClick={withdrawClicked}>Confirm</button>
                </div>


            </Fragment>
        )

    }

    const deposit = () => {

        setTransaction(
            <Fragment>
                <div className='transaction-input'>
                    <p>Deposit Amount</p>
                    <input type='number' className='browser-default' placeholder="Enter Amount" onChange={depositChange.bind()} value={user.depositValue} />
                </div>
                <div className='transaction-confirmation'>
                    <button onClick={depositClicked}>Confirm</button>
                </div>

            </Fragment>
        )

    }

    const tranferConfirmClicked = () => {

        setTransaction(
            <Fragment>
                <div className='transaction-input'>
                    <p>Enter Receipient ID</p>
                    <input type='text' className='browser-default' placeholder="Enter Amount" />
                </div>
                <div className='transaction-confirmation'>
                    <button >Confirm</button>
                    <button onClick={transfer}>Back</button> 
                </div>


            </Fragment>

        )
    }

    const transfer = () => {
        setTransaction(
            <Fragment>
                <div className='transaction-input'>
                    <p>Enter Amount</p>
                    <input type='number' className='browser-default' placeholder="Enter Amount" />
                </div>
                <div className='transaction-confirmation'>
                    <button onClick={tranferConfirmClicked}>Confirm</button>
                   
                </div>
              
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className='transaction-create'>

                <div className='transaction-title'>
                    <p>Click Your Transaction:</p>
                </div>
                <div className='transaction-action'>
                    <button className="waves-effect waves-light btn-small" onClick={withraw}>Withdraw</button>
                    <button className="waves-effect waves-light btn-small" onClick={deposit}>Deposit </button>
                    <button className="waves-effect waves-light btn-small" onClick={transfer}>Transfer </button>
                </div>
                <hr />

                {transaction}
                <hr />


                <div className='transaction-footer'>
                    <button className="waves-effect waves-light btn-small" onClick={showModalClicked}>Back</button>
                </div>
            </div>

        </Fragment>

    )
}

const mapStateToProps =(state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        depositClicked: () => dispatch(actions.UserDepositValueButton()),
        withdrawClicked: () => dispatch(actions.UserWithdrawValueButton()),
        transferClicked: () => dispatch(actions.UserTransferValueButton()),
        depositChange: (event) => dispatch(actions.UserDepositValue(event)),
        withdrawChange: (event) => dispatch(actions.UserWithdrawValue(event)),
        transferChange: (event) => dispatch(actions.UserTransferValue(event)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionCreate)