import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const handleEditTask = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = taskInput;
    setTasks(updatedTasks);
    setTaskInput("");
    setEditIndex(null);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    // Reset edit state if task being edited is deleted
    // if (editIndex === index) {
    //   setTaskInput("");
    //   setEditIndex(null);
    // }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">📝 Todo List</h2>
        <form
          onSubmit={editIndex !== null ? handleUpdateTask : handleAddTask}
          className="d-flex gap-2 mb-3"
        >
          <input
            type="text"
            placeholder="Enter your task..."
            className="form-control"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            type="submit"
            className={`btn ${
              editIndex !== null ? "btn-success" : "btn-primary"
            }`}
          >
            {editIndex !== null ? "Update Task" : "Add Task"}
          </button>
        </form>

        {tasks.length > 0 ? (
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{task}</span>
                <div className="btn-group">
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => handleEditTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted text-center">No tasks yet. Add one!</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
