import React, {useState, useEffect} from "react";

function TodoDate() {
    let[time, setTime] = useState("");

    useEffect(() => {
        let intervalID = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return (() => {return clearInterval(intervalID)});
    }, []);

    return (
        <>
            <h2 className='date-time'>{new Date().toLocaleDateString()} - {time}</h2>
        </>
    );
}

export default TodoDate;