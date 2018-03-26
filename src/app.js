import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import './components/style.scss'

class App extends Component {
  render () {
    const store = configureStore()
    return (
      <Provider store={store}>
        <h1>Hello world</h1>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))
