import React, { useState } from 'react'

function TodoForm({formSubmit}) {
    const [inputValue, setInputValue] = useState({id:"", content:"", checked:false});

    let handleInputChange = (val) => {
        setInputValue({id: val, content: val, checked: false});
    }

    let handleFormSubmit = (event) => {
        event.preventDefault();
        formSubmit(inputValue);
        setInputValue({id:"", content:"", checked:false});
    }

    return (
        <>
            <section className='form'>
                <form onSubmit={(event) => handleFormSubmit(event)}>
                    <div>
                        <input type="text" className='todo-input' autoComplete='off' value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)} />
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
