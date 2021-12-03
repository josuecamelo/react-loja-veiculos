import { actionTypes } from '../actions/loading.action'

const initialState = {
    open: false,
    msg: 'Carregando...'
}

const loadReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, ...payload }

    default:
        return state
    }
}

export default loadReducer