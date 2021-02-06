import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render(){
        return(
            <header>
                <h2><a>Recipe App</a></h2>
                <nav>
                    <li><a href='/'>New Recipe</a></li>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact Us</a></li>
                </nav>
            </header>
        )
    }
}

export default NavBar;