import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import rootReduce from './reducers/rootReduces'

let middleware = [ReduxThunk];

export const store = createStore(rootReduce, applyMiddleware(...middleware));
