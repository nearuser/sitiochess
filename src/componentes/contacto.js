// src/pages/Contact.js
import React from 'react';
import './contacto.css'
import contactoImg from '../recursos/imagenes/contacto.jpg'; // Asegúrate de que la ruta sea correcta

function Contacto() {
  return (
    <main id='contacto'>
      <section id="contacto">
        <div className="contact-form">
          <h2>Contacto</h2>
          <form>
            <label htmlFor="nombre">Nombre y Apellido</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="correo">Correo de contacto</label>
            <input type="email" id="correo" name="correo" required />

            <label htmlFor="celular">Celular</label>
            <input type="tel" id="celular" name="celular" required />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contact-image">
          <img src={contactoImg} alt="Imagen de contacto" />
        </div>
      </section>
    </main>
  );
}

export default Contacto;
