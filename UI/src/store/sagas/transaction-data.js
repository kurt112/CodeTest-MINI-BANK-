import {put} from 'redux-saga/effects'
import * as actions from '../actions/index'
import axios from 'axios'
import * as http from '../../httpRequest'
export function* TransactioninitData (){
  
    try{
        let data =[];
       
        yield axios.get(http.transactionList).then((response) =>{
            data = response.data
           
        })

       
        yield put(actions.successData(data))
    }catch(error){
        yield put(actions.failData(error))
    }
}