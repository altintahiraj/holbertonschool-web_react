import React from 'react';
import './Header.css';
import image3 from '../assets/holberton-logo.jpg';

const Header = () => {
  return (
    <div className="App-header">
      <img src={image3} alt="holberton logo" />
      <h1 style={{color:'#e1003c'}}>School dashboard</h1>
    </div>
  );
};

export default Header;