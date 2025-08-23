import React from 'react'
import { useState } from "react"

const TodoList = () => {

    const [task, setTask] = useState(["Go to Gym", "Complete Assignment", "Read a Book"]);
    const [newtask, setNewTask] = useState("");

    function handleChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
       if(newtask.trim() !== ""){
         setTask(t=>[...t, newtask]);
         setNewTask("");
       }
    }
    function deleteTask(index) {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }
    function moveUp(index) {
        const currentTask = task[index];

        const newTask = prompt("Edit your task:", currentTask);

    if (newTask !== null && newTask.trim() !== "") {
        const updatedTasks = [...task];
        updatedTasks[index] = newTask;
        setTask(updatedTasks);
    }
   }


  return (
    <>
        <div className='to-do-list'>
            <h1>To-Do List</h1> 
            <div>
                <input type="text" placeholder='Enter a task....' value={newtask}  onChange={handleChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
             {task.length === 0 ? (
                <p className='no-task'>
                    Todo item is not found please add a task.
                </p>
                ) : (
            <ol>
                {task.map((iteam, index) => (
                    <li key={index}>
                        <span className='text'>{iteam}</span>
                        <button className='move-button' onClick={() => moveUp(index)}>Edit</button>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ol>
            )}
        </div>
    </>
  )
}

export default TodoList