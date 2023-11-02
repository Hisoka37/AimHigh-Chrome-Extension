import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
  };

  const finishEditing = () => {
    setEditingIndex(-1); // Finish editing
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="flex-grow border p-2"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
              className="mr-2"
            />
            {editingIndex === index ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => {
                  const updatedText = e.target.value;
                  const updatedTasks = [...tasks];
                  updatedTasks[index].text = updatedText;
                  setTasks(updatedTasks);
                }}
                onBlur={finishEditing} // Finish editing when input loses focus
                className="flex-grow border p-2"
              />
            ) : task.completed ? (
              <del>{task.text}</del>
            ) : (
              task.text
            )}
            <div>
              {editingIndex !== index && (
                <button
                  onClick={() => startEditing(index)}
                  className="text-yellow-500 mr-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
