import * as actionType from '../actionType'
import {updateObject} from '../utility/store/updateObject'
const initState = ({
    username: '',
    password: '',
    user: null,
    error: null,
    loading: false,
    depositValue: 0,
    withdrawValue: 0,
    transferIdValue: 0,
    tranferAmount:0
})


const loginUsernameChange = (state,action) => {
    state = updateObject(state, {username: action.event.target.value})
    return state
}

const loginPasswordChange = (state,action) => {
    state = updateObject(state, {password: action.event.target.value})
    return state
}

const loginSuccess = (state, action) => {
    state = updateObject(state,{loading: false})
    state = updateObject(state, {user: action.data})

    return state
}

const loginFail = (state, action) => {
    state = updateObject(state,{loading: false})
    state = updateObject(state, {error: 'No User Found'})
    
    return state
}

const loginUser = (state, action) => {
    state = updateObject(state,{loading: true})
    action.event.preventDefault();
   
    return state;
}


const withdrawChange =(state, action) => {
    state = updateObject(state, {withdrawValue: action.event.target.value})
    return state
}

const depositChange = (state, action) => {
    state = updateObject(state, {depositValue: action.event.target.value})
    return state
}

const transferChange = (state, action) => {
    state = updateObject(state, {tranferAmount: action.event.target.value})
    return state
}

const transferChangeId = (state, action) => {
    state = updateObject(state, {transferIdValue: action.event.target.value})
    return state;
}

const withdrawClicked = (state, action) => {

    return state
}

const transferClicked = (state, action) => {
    return state
}

const depositClicked = (state, action) => {
    
    return state
}



const reducer = (state = initState, action) => {
    switch(action.type){
        case actionType.LOGIN_USER_PASSWORD: return loginPasswordChange(state,action)
        case actionType.LOGIN_USER_USERNAME: return loginUsernameChange(state,action)
        case actionType.LOGIN_FAIL: return loginFail(state,action)
        case actionType.LOGIN_SUCCESS: return loginSuccess(state,action)
        case actionType.LOGIN_USER: return loginUser(state, action)
        case actionType.USER_TRANSFER_VALUE: return transferChange(state,action)
        case actionType.USER_DEPOSIT_VALUE: return depositChange(state,action)
        case actionType.USER_WITHDRAW_VALUE: return withdrawChange(state,action)
        case actionType.USER_DEPOSIT_VALUE_BUTTON: return depositClicked(state, action)
        case actionType.USER_TRANSFER_VALUE_BUTTON: return transferClicked(state,action)
        case actionType.USER_WITHDRAW_VALUE_BUTTON: return withdrawClicked(state, action)
        case actionType.USER_TRANSFER_ID: return transferChangeId(state, action)
        default: return state
    }
}


export default reducer