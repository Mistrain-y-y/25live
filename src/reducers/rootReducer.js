import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import loadingReducer from './loadingReducer'
import showLoginPage from './showLoginPage'
import collectListReducer from './collectListReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  loading: loadingReducer,
  showLogin: showLoginPage,
  collect: collectListReducer
})

export default rootReducer