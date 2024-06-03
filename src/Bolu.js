import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
let Greeter = (props) => {
    

    
    const [buttonClicked, setButtonClicked] = useState(false);
    const handleButtonClick = () => {
         setButtonClicked(prevState => !prevState);
    }
   

    let [wego, setTitle] = useState(props.price);
    let clickHandler = () => {
        setTitle(wego * 0.9)
    };

    let [fago, setCounter] = useState(0);
    let clickHolder = () => {
        setCounter(fago+1)
    };
    return (
        <>
            <div className='mainn'>
                
                <h1>{props.title}</h1>
                <img src={props.image} style={{borderRadius:'100%'}} alt='tf' />
                <p style={{color:'white', background:'black', marginTop:'20px'}}>{props.description}</p>
                <h1 style={{color:'black'}}>+{fago}</h1>
                <button onClick={clickHolder} style={{color:'white', background:'black'}}>Quantity</button>
                <div style={{color:'white', background:'black', marginTop:'20px'}}>
                    <p>{props.price}</p>
                    <p>{wego}</p>
                    { buttonClicked ? (<button onClick={handleButtonClick}>Buy</button>) : (<button onClick={handleButtonClick}>Get Discount</button>
            )}
                    <button onClick={clickHandler} className='savee'>Get Discount</button>
                </div>
                

                {/* {buttonClicked ? <button>Buy</button> : <button>Get Discount</button>} */}
                

                
            </div>

            {
            // REST
            /* <div>
                function sum(...rest){
                    const total =0;
                    for (let i=0; 1<rest.length; i++){
                        total+= number[i];
                    }
                    return total;

                    console.log(sum(4,5,6,7,8));
                }
            </div> */}

        </>
    );
}

export default Greeter;