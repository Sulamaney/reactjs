
// import React, { useState } from 'react';


function Sula() {
    // const [emailEntered, setEmailEntered]= useState('');
    // const [passEntered, setpassEntered]= useState('');

    function formHandler(event){
        event.preventDefault();
        // const fd= new FormData(event.target)

        // const myemail= fd.get('email')
        // const mypassword= fd.get('password')
        // console.log('email');
        // console.log('password');
    }


     // function passwordHandler(event){
    //     setpassEntered(event.target.value)
    // }

    // function emailHandler(event){
    //     setEmailEntered(event.target.value)
    // }



    return (
        
        <form onSubmit={formHandler}>
            <h2>Login Form</h2>
            <div className="form-control">
                <label>Email:</label>
                <input 
                type="email" 
                id="email" 
                name="email"
                // onChange={emailHandler}
                // value={emailEntered}
                />
            </div><br/>

            <div className="">
                <label>Password:</label>
                <input 
                type="password"
                id="password" 
                name="password"
                // onChange={passwordHandler}
                // value={passEntered}
                />
            </div>

            <button>Send</button>
        </form>
    )



}
export default Sula;