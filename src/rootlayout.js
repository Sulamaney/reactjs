import './App.css';
import  Mainnavigation from './mainnavigation.js';
import { Outlet } from 'react-router-dom';

function RootLayout(){
    return (
        <>
            <Mainnavigation/>
            <Outlet/>
        </>
    )
}
export default RootLayout;