import { CHANGE_TO_LOADING } from "../constants"

const loadingReducer = (state={isLoading: false}, action) => {
  switch(action.type) {
    case CHANGE_TO_LOADING:
      return {
        isLoading: !state.isLoading
      }
    default:
      return state
  }
}

export default loadingReducer