import React from 'react';
import logo from '../app_logo.png'
import { Link } from 'react-router-dom';
export default function Sidebar(){
    return (
        <nav id="sidebar">
        <div class="sidebar-header mt-3">
            <img src={logo}  height={50}/>
        </div>

        <ul class="list-unstyled components">
            <li className="active">
                <Link to="/">Profile</Link>
            </li>
            <li className="active">
                <Link to="/contact">Help</Link>
            </li>
        </ul>
    </nav>
    )
}