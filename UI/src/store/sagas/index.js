import {takeLeading} from 'redux-saga/effects'
import * as actions from '../actionType'

import {
    TransactioninitData
}from './transaction-data'

import {
    userInitData
}from './user-data'

import {
    UserLogin,
    UserDeposit,
    UserWithdraw
}from './userLogin'


export function* watchUserWithdraw() {
    yield takeLeading(actions.USER_WITHDRAW_VALUE_BUTTON, UserWithdraw)
}
export function* watchUserDeposit() {
    yield takeLeading(actions.USER_DEPOSIT_VALUE_BUTTON,UserDeposit)
}
export function* watchLoginUser() {
    yield takeLeading(actions.LOGIN_USER, UserLogin)
}

export function* watchInitDataTransaction () {
    yield takeLeading(actions.TABLE_TRANSACTION_INITDATA,TransactioninitData)
}

export function* watchInitDataUsers() {
    yield takeLeading(actions.TABLE_USER_INITDATA, userInitData)
}