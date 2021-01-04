import {
  CHANGE_TO_LOADING,
  CHANGE_TO_LOADED
} from "../constants"

const loadingReducer = (state = {
  isLoading: false
}, action) => {
  console.log(action.type)
  switch (action.type) {
    case CHANGE_TO_LOADING:
      return {
        isLoading: true
      }

      case CHANGE_TO_LOADED:
        return {
          isLoading: false
        }
        default:
          return state
  }
}

export default loadingReducer