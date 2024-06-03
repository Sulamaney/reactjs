import './App.css';
import React, { useState } from 'react';
function Greet(){
    const [isShown, setisShown] = useState(false);
    const toggle =() =>{
        setisShown((isShown)=>!isShown)
    }
    return(
        <>
            <h1>Welcome Sula Store</h1>
            <button onClick={toggle}>About Us</button>{isShown &&<p>See more item here</p>}
        </>
    )
}

export default Greet;