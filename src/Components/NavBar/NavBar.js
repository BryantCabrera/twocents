import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render () {
        return (
            <div className="navbar">
                <div className="navbar__logo">
                    <img className="navbar__logo__img" src="/imgs/two-cents__logos/tcns-logo.png" alt="TwoCents Logo" title="TwoCents Logo"></img>
                </div>
                <nav className="navbar__nav--linear">
                    <a href="#about" title="About Page">About</a>
                    <a href="#Services" title="Services Page">Services</a>
                    <a href="#Support" title="Support Page">Support</a>
                    <a href="#Contact" title="Contact Page">Contact</a>
                </nav>
                <nav className="navbar__nav--hamburger">
                    <ul className="hamburger__list">
                        <li className="hamburger__item"></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;