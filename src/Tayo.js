import './App.css';
let Greet= (props)=>{
    return(
        <>
            <h1 className='naso'>
                {props.name} {props.user} User
            </h1>
        </>
    )
}

export default Greet;