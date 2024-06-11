import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

let Greeter = (props) => {
    

    
   

    let [wego, setTitle] = useState(props.price);
    let [bclick, setButtonClicked] = useState(true);
    let clickHandler = () => {
        setTitle(wego * 0.9)
        setButtonClicked(false)
        // setOldPriceStyle{textDecoration: 'line-through'}
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

                {/* <span className='spanbold' style={oldPriceStyle}>&#8358{props.price}</span>
                {buttonClicked && <span className='spanbold'>&nbsp;</span>} */}


                <h1 style={{color:'black'}}>+{fago}</h1>
                <button onClick={clickHolder} style={{color:'white', background:'black'}}>Quantity</button>
                <div style={{color:'white', background:'black', marginTop:'20px'}}>
                    <p style={{textDecoration: bclick? 'none': 'line-through'}}>{props.price}</p>
                    <p style={{display: bclick? 'none': 'inline-block'}}>{wego}</p><br/>

                    
                    { bclick ? (<button onClick={clickHandler} className='savee'>Get Discount</button>) : (<button>buy now</button>)}

                </div>
          
        

                
            </div>
                
           





         
        </>
      
    );
}

export default Greeter;