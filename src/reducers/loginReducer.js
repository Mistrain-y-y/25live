import { CHANGE_TO_LOGGED } from "../constants"

const loginReducer = (state={logged: false}, action) => {
  console.log(action)
  switch(action.type) {
    case CHANGE_TO_LOGGED:
      return {
        logged: true,
        user: action.userData
      }
    default:
      return state
  }
}

export default loginReducer