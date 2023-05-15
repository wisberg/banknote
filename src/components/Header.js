import React from 'react';
import '../style/header.css';

const Header = () => {
  return (
    <header className = "header">
        <h1 className = "header-logo">BankNote</h1>
        <ul className = 'header-link-list'>
        <li>Curency Exchange</li>
        <li>Currency Lookup</li>
        <li>Find a Currency</li>
        <li>Contact</li>
        </ul>
        <button className = "getStarted">Get Started</button>
    </header>
  )
}

export default Header;