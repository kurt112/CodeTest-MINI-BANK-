import React from 'react'
import { connect } from 'react-redux'
import './register-form.css'
import * as actions from '../../../../store/actions'
const RegisterForm = props => {


    return (
        <div className="register-form">
            <form >
                <input type='text' className='browser-default' placeholder='first name' />
                <input type='text' className='browser-default' placeholder='last name' />
                <input type='email' className='browser-default' placeholder='email' />
                <input type='password' className='browser-default' placeholder='password' />
                <input type='password' className='browser-default' placeholder='Repeat Password' />
                <select className="browser-default" >
                   
                </select>
                <input type='text' className='browser-default' placeholder='Birthdate' />
                <select className='browser-default' >

                </select>
                <select className="browser-default" >

                </select>
                <button className="btn waves-effect waves-light" type="submit" name="action">Create Account</button>

            </form>
            <hr />
            <button onClick={props.loginBack} className="create-account waves-effect waves-light btn-small">Go to Login</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {

        showRegister: state.ui.showRegister

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        loginBack: () => dispatch(actions.loginBackClicked())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)