import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleDone, editTask } from "../../redux/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(task.name);

  const handleDeleteTask = () => {
    dispatch(deleteTask(task));
  };

  const handleToggleDone = () => {
    dispatch(toggleDone(task));
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditName(task.name);
  };

  const handleSaveTask = useCallback(() => {
    dispatch(editTask({ ...task, name: editName }));
    setEditMode(false);
  }, [dispatch, editName, task]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleSaveTask();
      }
    },
    [handleSaveTask]
  );

  return (
    <li key={task.id}>
      {editMode ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSaveTask();
          }}
        >
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.name}
          </span>
          <button onClick={handleToggleDone}>
            {task.done ? "Undone" : "Done"}
          </button>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteTask}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default Task;
