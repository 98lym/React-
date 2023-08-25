import React, { Component } from 'react'
import './App.scss'
// import Hello from './views/Hello'
// import TodoList from "./views/TodoList";
// import DevelopmentRequest from './views/DevelopmentRequest'
import GitHubQuery from './views/GitHubQuery'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Hello/> */}
        {/* <TodoList /> */}
        {/* <DevelopmentRequest /> */}
        <GitHubQuery />
      </div>
    )
  }
}
export default App
