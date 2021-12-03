import { combineReducers } from 'redux'

import loadingReducer from './loading.reducer'

const rootReduce = combineReducers({
    loadingReducer
})

export default rootReduce