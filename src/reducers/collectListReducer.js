import {
  USER_COLLECTS
} from "../constants"

const loadingReducer = (state = []
, action) => {
  switch (action.type) {
    case USER_COLLECTS:
      return [action.collectArr]
      default:
        return state
  }
}

export default loadingReducer