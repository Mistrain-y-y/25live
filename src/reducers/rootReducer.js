import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  loading: loadingReducer
})

export default rootReducer