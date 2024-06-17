// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import banner from '../recursos/imagenes/banner.jpg';

function Header() {
  return (
    <header className="hero">
      <div className="hero-image">
        <img src={banner} alt="Banner" />
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Club de Ajedrez Chile Chico</h1>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeClassName="active"><i className="fa-regular fa-chess-king"></i> Inicio</NavLink></li>
            <li><NavLink to="/sobre-nosotros" activeClassName="active"><i className="fa-solid fa-chess-pawn"></i> Sobre Nosotros</NavLink></li>
            <li><NavLink to="/contacto" activeClassName="active">Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
