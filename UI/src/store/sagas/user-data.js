import { put } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions/index'
import * as http from '../../httpRequest'
export function* userInitData() {
    try {
        let data = [];
     
        yield axios.get(http.userList).then((response) => {
            data = response.data
        })


        yield put(actions.UsersuccessData(data))
    } catch (error) {
        yield put(actions.UserfailData(error))
    }
} 