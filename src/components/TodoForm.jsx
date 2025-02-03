import React, { useState } from 'react'

function TodoForm({formSubmit}) {
    const [inputValue, setInputValue] = useState("");

    let handleFormSubmit = (event) => {
        event.preventDefault();
        formSubmit(inputValue);
        setInputValue("");
    }

    return (
        <>
            <section className='form'>
                <form onSubmit={(event) => handleFormSubmit(event)}>
                    <div>
                        <input type="text" className='todo-input' autoComplete='off' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className='form-btn'>Add Task</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default TodoForm
