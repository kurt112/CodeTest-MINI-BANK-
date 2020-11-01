import { put, select } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions/index'
import * as http from '../../httpRequest'
import * as Selector from './selector'
export function* UserLogin() {
    const user = yield select(Selector.user)


    const params = new URLSearchParams();
    params.append('username', user.username);
    params.append('password', user.password);


    try {
        const userData = yield axios.post(http.login, params);
        yield put(actions.LoginSuccess(userData.data))
    } catch (error) {
        yield put(actions.LoginFail(error))
    }
}

export function* UserWithdraw() {
    const user = yield select(Selector.user)

    const params = new URLSearchParams();
    params.append('id', user.user.id);
    params.append('value', user.withdrawValue);
    params.append('transaction', "Withdraw")
    try {
        if (user.withdrawValue > user.user.amount) throw Error
        const userData = yield axios.post(http.transaction, params);
        yield put(actions.LoginSuccess(userData.data))
        alert("Withdraw Success! ")
        alert("Current Value " + userData.data.amount)
    } catch (error) {
        alert("Withdraw should less than your amount")
    }
}

export function* UserDeposit() {
    const user = yield select(Selector.user)

    const params = new URLSearchParams();
    params.append('id', user.user.id);
    params.append('value', user.depositValue);
    params.append('transaction', "Deposit")

    try {
        if (user.depositValue <= 0) throw Error
        const userData = yield axios.post(http.transaction, params);
        yield put(actions.LoginSuccess(userData.data))
        alert("Deposit Success! ")
        alert("Current Value " + userData.data.amount)
    } catch (error) {
        alert("Deposit should have value")
    }

}

export function* UserTransfer() {
    // const user = yield select(Selector.user)

}