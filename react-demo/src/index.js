import React from "react";
import ReactDOM from "react-dom/client"; // React18 不在支持ReactDOM.render
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
