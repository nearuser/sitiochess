// src/pages/Contact.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import './contacto.css';
import contactoImg from '../recursos/imagenes/contacto.jpg';

function Contacto() {
  const form = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      alert("Mensaje enviado exitosamente");
      form.current.reset();
      setRecaptchaToken(null);  // Reset reCAPTCHA
    }, (error) => {
      console.log(error.text);
      alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    });
  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <main id='contacto'>
      <section id="contacto">
        <div className="contact-form">
          <h2>Contacto</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="nombre">Nombre y Apellido</label>
            <input type="text" id="nombre" name="from_name" required />

            <label htmlFor="correo">Correo de contacto</label>
            <input type="email" id="correo" name="reply_to" required />

            <label htmlFor="celular">Celular</label>
            <input type="tel" id="celular" name="celular" required />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="message" required></textarea>

            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={onRecaptchaChange}
            />

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
