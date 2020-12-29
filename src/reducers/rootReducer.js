import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import loadingReducer from './loadingReducer'
import showLoginPage from './showLoginPage'

const rootReducer = combineReducers({
  login: loginReducer,
  loading: loadingReducer,
  showLogin: showLoginPage
})

export default rootReducer