
const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      return {...state, fetching: true}
      break;
    case "FETCH_USERS_ERROR":
      return {...state, error: action.error}
      break;
    case "RECEIVE_USERS":
      return {...state, fetched: true, users:action.payload}
      break;
    default:
      return state
  }
}

export default reducer
