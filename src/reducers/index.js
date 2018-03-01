import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import itemReducer from './itemReducer'

const ecomm = combineReducers({
  cartReducer,
  itemReducer
})

export default ecomm