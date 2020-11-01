import * as actionType from '../../actionType'


export const searchChange = (event) => {
    return {
        type:actionType.TABLE_TRANSACTION_SEARCH,
        event
    }
}

export const initData = () => {
    return {
        type:actionType.TABLE_TRANSACTION_INITDATA
    }
}

export const successData = (data) => {
    return {
        type:actionType.TABLE_TRANSACTION_SUCESS,
        data
    }
}

export const failData = (data) => {
    return {
        type:actionType.TABLE_TRANSACTION_FAIL,
        data
    }
}

