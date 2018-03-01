import { createStore } from 'redux'
// import logger from 'redux-logger'

import reducer from '../reducers'

let store = createStore(reducer)

export default store