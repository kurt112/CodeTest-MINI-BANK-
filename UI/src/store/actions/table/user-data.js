import * as actionType from '../../actionType'


export const UsersearchChange = (event) => {

    return {
        type:actionType.TABLE_USER_SEARCH,
        event
    }
}

export const UserinitData = () => {
    return {
        type:actionType.TABLE_USER_INITDATA
    }
}

export const UsersuccessData = (data) => {
    return {
        type:actionType.TABLE_USER_SUCESS,
        data
    }
}

export const UserfailData = (data) => {
    return {
        type:actionType.TABLE_USER_FAIL,
        data
    }
}

