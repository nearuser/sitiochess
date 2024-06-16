// src/components/Header.js
import React from 'react';
import './header.css'; // Asegúrate de crear este archivo para los estilos
import banner from '../recursos/imagenes/banner.jpg'

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
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
