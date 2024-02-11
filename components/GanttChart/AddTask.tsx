import { useState, useRef } from 'react';
import AddButton from './AddButton';

export default function AddTask({setTasks}) {
  const [task, setTask] = useState('');
  const inputRef = useRef(null);

  function onChange(e, i) {
    
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!task.trim()) return;

    setTasks((prevState) => {
      // Find the maximum ID in the current tasks
      const maxId = prevState?.reduce((max, task) => Math.max(max, task.id), 0);
      const newTask = {
        id: maxId + 1, // Assign a unique ID to the new task
        name: task,
      };
      // Add the new task to the tasks array
      return [...prevState, newTask];
    });

    // Clear the input field after adding task
    setTask('');
    // Focus on the input field for the next task
    inputRef.current.focus();
  }

  return (
    <form id="add-task" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input value={task} onChange={onChange} placeholder="add task name" ref={inputRef} />
      <AddButton />
      <style jsx>{`
        #add-task {
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
        }

        input {
          height: var(--cell-height);
          margin-top: 21px;
          margin-bottom: 21px;
        }
      `}</style>
    </form>
  );
}
