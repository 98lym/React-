import React, {Component} from "react";
// import Hello from './views/Hello'
import TodoList from "./views/TodoList";
class App extends Component {
    render() {
        return (
            <div>
                {/* <Hello/> */}
                <TodoList />
            </div>
        )
    }
}
export default App
