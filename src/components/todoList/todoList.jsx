import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
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

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      addTask();
    }
  };

  const myThoughts = [
    "Play Tennis",
    "Walk 6 KM",
    "Drink a Glass of Water",
    "Plant a Tree",
    "GogShopping",
  ];

  return (
    <div className="absolute  inset-x-0 top-0 items-start max-w-md mx-auto ml-25 pt-60">
      <h1 className=" font-extrabold leading-3 tracking-tight text-white sm:text-5xl  filter transition duration-300 drop-shadow-xl">
                                    <span className="block">It's Time to Start :</span></h1>
      <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
        <input
          type="text"
          placeholder={
            myThoughts[Math.floor(Math.random() * myThoughts.length)]
          }
          value={newTask}
          className="w-full h-12 px-6  font-medium text-indigo-800 focus:outline-none border"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <span className="relative top-0 right-0 block">
          <button
            type="button"
            className="inline-flex items-center w-28 h-12 px-8 text-base font-extrabold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700"
            onClick={addTask}
          >
            Add
          </button>
        </span>
      </div>

      <ul className="pt-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2 bg-white p-4 rounded-lg ">
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
              <h2 className="text-2xl leading-3 ">🚀{task.text}</h2>
            )}
            <div className="flex flex-col gap-2">
              {editingIndex !== index && (
                <button
                  onClick={() => startEditing(index)}
                  className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
