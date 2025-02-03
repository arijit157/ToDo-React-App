import React, { useEffect, useState } from 'react'
import './Todo.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';


function Todo() {
    const [task, setTask] = useState([]);

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
                <TodoDate/>
            </header>

            <TodoForm formSubmit={handleFormSubmit} />

            <section className='myUnOrdList'>
                <ul>
                    {task.map((el, index) => {
                        return (
                            <TodoList key={index} todoName={el} deleteTask={handleDeleteTaskItem} />
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
