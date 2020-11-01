import React from 'react'
import './Login.css'
import LoginForm from './login-form/login-form'
// import RegisterForm from './register-form/register-form'
import { connect } from 'react-redux'
// import Loading from '../loading/loading'
const Login = ({ showRegister, loading }) => {

    return (
        <div className="login">
            <div className="login-container">
            <LoginForm />
                {/* {loading === true ? <Loading /> :
                    showRegister === false ?  :<RegisterForm />} */}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        showRegister: state.ui.showRegister
    }
}


export default connect(mapStateToProps)(Login)