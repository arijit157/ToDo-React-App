import React, { useEffect, useState } from 'react'
import './Todo.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import TodoForm from './TodoForm';


function Todo() {

    
    const [task, setTask] = useState([]);
    let[time, setTime] = useState("");

    let handleFormSubmit = (inputValue) => {

        if (inputValue.length === 0) {
            return;
        }

        // setTask((prev) => [...prev, inputValue]);

        if (!task.includes(inputValue)) {
            task.push(inputValue);
            setTask(task);
        }
    }

    useEffect(() => {
        let intervalID = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return (() => {return clearInterval(intervalID)});
    }, []);

    let handleDeleteTaskItem = (el) => {
        setTask(task.filter((t) => {
            return t!=el;
        }));
    }
    
    let handleDeleteAllTask = () => {
        setTask([]);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List App</h1>
                <h2 className='date-time'>{new Date().toLocaleDateString()} - {time}</h2>
            </header>

            <TodoForm formSubmit={(event) => handleFormSubmit(event)} />

            <section className='myUnOrdList'>
                <ul>
                    {task.map((el, index) => {
                        return (
                            <li key={index} className='todo-item'>
                                <span>{el}</span>
                                <button className='check-btn'><FaCheckCircle /></button>
                                <button className='delete-btn' onClick={() => handleDeleteTaskItem(el)}><MdDeleteForever /></button>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleDeleteAllTask}>Clear All</button>
            </section>
        </section>
    )
}

export default Todo
