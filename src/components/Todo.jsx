import React, { useState } from 'react'
import './Todo.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';


function Todo() {
    const [task, setTask] = useState([]);

    let handleFormSubmit = (inputValue) => {

        let {id, content, checked} = inputValue;

        if (content.length === 0) {
            return;
        }

        // let flag = false;

        // task.forEach((item) => {
        //     if(item.content === content){
        //         flag = true;
        //         return;
        //     }
        // });

        // if(!flag){
        //     setTask((prev) => [...prev, inputValue]);
        // }

        let ifTodoContentMatched = task.find((item) => item.content === content);

        if(ifTodoContentMatched){
            return;
        }

        setTask((prev) => [...prev, {id, content, checked}]);
    }

    let handleDeleteTaskItem = (el) => {
        setTask(task.filter((t) => {
            return t.content!=el;
        }));
    }
    
    let handleDeleteAllTask = () => {
        setTask([]);
    }

    let handleCheckUncheck = (taskName) => {
        let updatedTodos = task.map((curElem) => {
            if(curElem.content === taskName){
                return ({...curElem, checked:!curElem.checked});
            }
            return curElem;
        });

        setTask(updatedTodos);
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
                    {task.map((el) => {
                        return (
                            <TodoList key={el.id} todoName={el.content} deleteTask={handleDeleteTaskItem} isChecked={el.checked} toggleCheck={handleCheckUncheck} />
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
