import React, { Fragment } from 'react'
import './login-form.css'
import * as actions from '../../../../store/actions'
import { connect } from 'react-redux'
const LoginForm = (props) => {

    return (
        <Fragment>
            <div className="login-text">
                <h1>MINI BANK THIS CODE IS FOR MY CODE TEST</h1>
            </div>
            <div className="login-form">
                <form onSubmit={props.login}>
                    <input type='text' className='browser-default' onChange={props.username} value={props.user.username} placeholder="Enter email" />
                    <input type='password' className='browser-default' onChange={props.password} value={props.user.password} placeholder="Enter Password" />
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </form>
                <div className="error">{props.user.error !== null?  <p> No User Found</p>:null}</div>
                <hr />
                {/* <button onClick={props.showRegister} className="create-account waves-effect waves-light btn-small">Create Account</button> */}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        showRegister: state.ui.showRegister,
        user: state.userLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showRegister: () => dispatch(actions.registerClicked()),
        login: (event) => dispatch(actions.Login(event)),
        username: (event) => dispatch(actions.LoginUsernameChanged(event)),
        password: (event) => dispatch(actions.LoginPasswordChanged(event))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)