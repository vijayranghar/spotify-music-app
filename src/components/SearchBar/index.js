import React, { Component } from 'react'
import { connect } from 'react-redux'

import fetchUsersStart from '../../actions'

// const CLIENT_ID = '4fb8bacf169742228c6577263daefc43'
// const BASE_URL = 'https://api.spotify.com/v1/search?'
// const api="https://randomuser.me/api/"

class Search extends Component {
  constructor () {
    super()
    this.state = {
      query:''
    }
  }
  handleChange = (e) => {
    let event = e.target.value
    this.setState({}, (e) => {
      console.log(event)
    })
    this.props.fetchUsersStart()
    // let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    // let accessToken = 'BQBezM0mAWRJjn7LiE3bqztH4TpKCp7QWFjDqEiAUVapNAlfl2-GwssDVeartiyrCgl2IUzMhMRU2fSBFgR_InZQQMa93j0mXpXPhA_u3MMhq3dHOrG-vWcqtjV5jSOJnjWh6AtBNBzL3hJTkW2gXBi9ZSZb1VFjEBJj5UgayCWKI2O0oA'
    // var myOptions = {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': 'Bearer ' + accessToken
    //   },
    //   mode: 'cors',
    //   cache: 'default'
    // }
      //  fetch(FETCH_URL, myOptions)
      //  .then(response => console.log(response.json()))
    // this.setState({
    //   inputTypeText: e.target.value,
    // })
  }
  render () {
    const { inputTypeText } = this.state
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchUsersStart: () => { dispatch(fetchUsersStart()) }
  //increment: () => { dispatch(increment()) }
})
export default connect('', mapDispatchToProps)(Search)
