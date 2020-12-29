import {
  SHOW_LOGIN_PAGE,
  HIDE_LOGIN_PAGE
} from "../constants"

const showLoginPage = (state = {
  showLogin: false
}, action) => {
  switch (action.type) {
    case SHOW_LOGIN_PAGE:
      return {
        showLogin: true
      }
      case HIDE_LOGIN_PAGE:
        return {
          showLogin: false
        }
        default:
          return state
  }
}

export default showLoginPage