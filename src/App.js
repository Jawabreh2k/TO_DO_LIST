import React from "react";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>TO-DO-LIST APPLICATION</h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
