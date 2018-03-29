import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Body from './components'
import configureStore from './configureStore'

class App extends Component {
  render () {
    const store = configureStore()
    return (
      <Provider store={store}>
        <Body />
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))
