import * as actionType from '../actionType'

export const UserWithdrawValue = (event) => {
    return {
        type: actionType.USER_WITHDRAW_VALUE,
        event
    }
}

export const UserDepositValue = (event) => {
    return {
        type: actionType.USER_DEPOSIT_VALUE,
        event
    }
}

export const UserTransferValue = (event) => {
    return {
        type: actionType.USER_TRANSFER_VALUE,
        event
    }
}

export const UserWithdrawValueButton = () => {
    return {
        type: actionType.USER_WITHDRAW_VALUE_BUTTON,
    }
}

export const UserDepositValueButton = (event) => {
    return {
        type: actionType.USER_DEPOSIT_VALUE_BUTTON
    }
}

export const UserTransferValueButton = (event) => {
    return {
        type: actionType.USER_TRANSFER_VALUE_BUTTON
    }
}


export const LoginUsernameChanged = (event) => {
    return {
        type: actionType.LOGIN_USER_USERNAME,
        event
    }
}

export const LoginPasswordChanged = (event) => {
    return {
        type: actionType.LOGIN_USER_PASSWORD,
        event
    }
}

export const Login = (event) => {
    return {
        type: actionType.LOGIN_USER,
        event
    }
}

export const LoginSuccess = (data) => {
    return {
        type: actionType.LOGIN_SUCCESS,
        data
    }
}

export const LoginFail = (data) => {
    return {
        type: actionType.LOGIN_FAIL,
        data
    }
}


