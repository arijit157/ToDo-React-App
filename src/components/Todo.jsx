import React, { useState } from 'react'
import './Todo.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


function Todo() {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    let[time, setTime] = useState("");

    let handleFormSubmit = (e) => {

        e.preventDefault();

        if (inputValue.length === 0) {
            return;
        }

        // setTask((prev) => [...prev, inputValue]);

        if (!task.includes(inputValue)) {
            task.push(inputValue);
            setTask(task);
            setInputValue("");
        }
        else {
            setInputValue("");
        }
    }

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List App</h1>
                <h2 className='date-time'>{new Date().toLocaleDateString()} - {time}</h2>
            </header>

            <section className='form'>
                <form onSubmit={(event) => handleFormSubmit(event)}>
                    <div>
                        <input type="text" className='todo-input' autoComplete='off' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className='todo-btn'>Add Task</button>
                    </div>
                </form>
            </section>
            <section className='myUnOrdList'>
                <ul>
                    {task.map((el, index) => {
                        return (
                            <li key={index} className='todo-item'>
                                <span>{el}</span>
                                <button className='check-btn'><FaCheckCircle /></button>
                                <button className='delete-btn'><MdDeleteForever /></button>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </section>
    )
}

export default Todo
