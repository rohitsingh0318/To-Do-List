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
  // purana task text nikal lo
  const currentTask = task[index];

  // user se new text lo
  const newTask = prompt("Edit your task:", currentTask);

  // agar user ne kuch enter kiya hai to update karo
  if (newTask !== null && newTask.trim() !== "") {
    const updatedTasks = [...task];
    updatedTasks[index] = newTask;
    setTask(updatedTasks);
  }
}


    function moveDown(index) {

    }


  return (
    <>
        <div className='to-do-list'>
            <h1>To-Do List</h1> 
            <div>
                <input type="text" placeholder='Enter a task....' value={newtask}  onChange={handleChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ol>
                {task.map((iteam, index) => (
                    <li key={index}>
                        <span className='text'>{iteam}</span>
                        <button className='move-button' onClick={() => moveUp(index)}>Edit</button>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ol>

        </div>
    </>
  )
}

export default TodoList