import React from 'react';
import './styles.css';
import avatar from '../../assets/images/avatar.jpg';

export default function Header() {
  return (
    <header className="w3-display-container">
      <img src={avatar} alt="Avatar"/>
      <div className="w3-display-bottomleft w3-container w3-text-black">
        <h2>Marcos Campos</h2>
      </div>
    </header>
  );
}