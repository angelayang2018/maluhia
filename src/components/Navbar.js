import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Navbar(){
    return(<div className = "navbar">
        <button className = "hidden">Listings</button>
        <Link to = "/home"><h1>Maluhia</h1></Link>
        <Link to = "/listings"><Button>Listings</Button></Link>
    </div>)
}