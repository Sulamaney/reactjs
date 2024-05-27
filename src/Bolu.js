import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
let Greeter = (props) => {

    let [title, setTitle] = useState(props.price);
    let clickHandler = () => {
        setTitle(title * 0.9)
    };
    return (
        <>
            <div>
                <h1>{props.title}</h1>
                <img src={props.image} />
                <p>{props.description}</p>
                <p>{title}</p>
                <button onClick={clickHandler} className='btn btn-primary'>Click</button>
            </div>

        </>
    );
}

export default Greeter;