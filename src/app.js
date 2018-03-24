import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './components/style.scss'

class App extends Component {
  render () {
    return (
      <div>
        This is the demo app
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))
