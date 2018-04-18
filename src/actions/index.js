export default function fetchUsersStart () {
  return function (dispatch) {
    dispatch({ type: 'FETCH_USERS_START' })
    fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      dispatch({ type: 'RECEIVE_USERS', payload: response.results })
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: error })
    })
  }
}
