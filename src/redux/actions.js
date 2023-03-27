export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: {
    id: Date.now(),
    name: task,
    done: false,
  },
});

export const deleteTask = (task) => ({
  type: "DELETE_TASK",
  payload: {
    id: task.id,
  },
});

export const toggleDone = (task) => ({
  type: "TOGGLE_DONE",
  payload: {
    id: task.id,
  },
});

export const editTask = (task) => ({
  type: "EDIT_TASK",
  payload: {
    id: task.id,
    name: task.name,
  },
});
