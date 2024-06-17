// src/pages/Home.js
import React from 'react';
import './inicio.css';
import invitacionImg from '../recursos/imagenes/iniciochch.jpg'; // Asegúrate de que la ruta sea correcta

function Inicio() {
  return (
    <main id="inicio">
      {/* Primera Sección: Invitación */}
      <section className="invitacion">
        <div className="texto">
          <h2>Bienvenidos al Club de Ajedrez de Chile Chico</h2>
          <p>Un espacio para los amantes del ajedrez de todas las edades y niveles.</p>
        </div>
        <div className="imagen">
          <img src={invitacionImg} alt="Invitación al club de ajedrez" />
        </div>
      </section>

      {/* Segunda Sección: Horario de Juntas Semanales */}
      <section className="horario">
        <h2>Horario de Juntas Semanales</h2>
        <p>Nos reunimos todos los sábados desde las 16:00 hrs en adelante en la Bibliote Municipal.</p>
        <br></br>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457.9164339541516!2d-71.726424537483!3d-46.5398146836167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbded2b465b9d9d49%3A0x9a87cd63f330532a!2sBiblioteca%20Municipal!5e0!3m2!1sen!2sus!4v1718600776947!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Mapa de ubicación"
        ></iframe>
      </section>

      {/* Tercera Sección: Noticias */}
      <section className="noticias">
        <h2>Noticias sobre la escena del ajedrez en Chile</h2>
        <ul>
          <li><a href="#noticia1">Noticia 1: Torneo Nacional de Ajedrez</a></li>
          <li><a href="#noticia2">Noticia 2: Nuevas estrategias en el ajedrez</a></li>
          <li><a href="#noticia3">Noticia 3: Entrevista con el campeón regional</a></li>
        </ul>
      </section>
    </main>
  );
}

export default Inicio;
