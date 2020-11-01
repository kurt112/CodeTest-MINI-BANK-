import * as actions from '../../actionType'
import { updateObject } from '../../utility/store/updateObject';

const initState = ({
    data: [],
    loading: true,
    search: '',
    error: null
})


const change = (state, action) => {
    state = updateObject(state,{search: action.event.target.value})
    return state;
}

const successData = (state, action) => {
    state = updateObject(state,{loading: false})
    state = updateObject(state, {data: action.data })
    return state;
}

const failData = (state,action) => {
    state = updateObject(state, {loading: false})
    state = updateObject(state, {error: action.data})
    return state;
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actions.TABLE_USER_SEARCH: return change(state, action);
        case actions.TABLE_USER_INITDATA: return state;
        case actions.TABLE_USER_SUCESS: return successData(state,action);
        case actions.TABLE_USER_FAIL: return failData(state,action);
        default: return state;
    }
}

export default reducer;