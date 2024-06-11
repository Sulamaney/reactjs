

import { Link } from "react-router-dom";
function Mainnavigation() {
    return (

        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/formpage'>Fill Form</Link></li>
                <li><Link to='/about'>Read More</Link></li>
            </ul>
            
        </>

    )
}
export default Mainnavigation;