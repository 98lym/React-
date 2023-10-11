import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.scss'
import TodoList from './views/TodoList'
import DevelopmentRequest from './views/DevelopmentRequest'
import GitHubQuery from './views/GitHubQuery'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-link">
          <NavLink to="/">TodoList</NavLink>
          <NavLink to="/developmentRequest">DevelopmentRequest</NavLink>
          <NavLink to="/gitHubQuery">GitHubQuery</NavLink>
        </div>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<TodoList />} />
            <Route
              path="/developmentRequest"
              element={<DevelopmentRequest />}
            />
            <Route path="/gitHubQuery" element={<GitHubQuery />} />
          </Routes>
        </div>
      </div>
    )
  }
}
export default App
