import * as actions from '../../actionType'
import {updateObject} from '../../utility/store/updateObject'
const initState = {
    data: [],
    loading: true,
    search: '',
    error: null
}

const searchChange =  (state,action) => {
     state =  updateObject(state, {search: action.event.target.value})
     return state
}

const initData = (state, action) => {
   
    return state
}

const successData = (state, action) => {    
    
    state = updateObject(state, {data: action.data})
    state = updateObject(state, {loading: false})
    return state;
}

const failData = (state, action) => {
    state = updateObject(state, {data: action.data})
   
    return state
}

const reducer =(state= initState, action) => {
    switch(action.type){
        case actions.TABLE_TRANSACTION_SEARCH:return searchChange(state,action);
        case actions.TABLE_TRANSACTION_INITDATA: return initData(state,action);
        case actions.TABLE_TRANSACTION_SUCESS: return successData(state,action);
        case actions.TABLE_TRANSACTION_FAIL: return failData(state,action);
        default: return state;
    }
}

export default reducer