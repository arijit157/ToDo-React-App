import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function TodoList({todoName, deleteTask}) {

    let handleDeleteTask = (todoName) => {
       deleteTask(todoName);
    }
    return (
        <>
            <li className='todo-item'>
                <span>{todoName}</span>
                <button className='check-btn'><FaCheckCircle /></button>
                <button className='delete-btn' onClick={() => handleDeleteTask(todoName)}><MdDeleteForever /></button>
            </li>
        </>
    )
}

export default TodoList
