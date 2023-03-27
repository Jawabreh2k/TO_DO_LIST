import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import "./styles.css";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //trim() removes white spaces
    if (taskName.trim()) {
      dispatch(addTask(taskName));
      setTaskName("");
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        className="add-task-input"
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="add-task-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTask;
