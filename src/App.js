import React from 'react'
import {hot} from 'react-hot-loader'

class App extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(state => ({count: state.count + 1}))
  }

  decrement = () => {
    this.setState(state => ({count: state.count - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Hello World!</h1>
        <h2 className={count > 10 ? 'warning' : null}>
          Count: {count}
        </h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default hot(module)(App)