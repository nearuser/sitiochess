// src/pages/About.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import fundadores from '../recursos/imagenes/fundadores.png';
import nosotros_md from '../recursos/textos/nosotros.md';
import '../paginas/nosotros.css' // Importa el archivo CSS

function Nosotros() {
  const [contenido_md, setContenido_md] = useState('');

  useEffect(() => {
    fetch(nosotros_md) // Asegúrate de que la ruta sea correcta
      .then(response => response.text())
      .then(mdContent => setContenido_md(mdContent));
  }, []);

  return (
    <main id="nosotros">
      <section id="sobre-nosotros">
        <div className='fundadores'>
          <h2>SOBRE EL CLUB Y SU NACIMIENTO</h2>
          <div className='markdown-content'>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>{contenido_md}</ReactMarkdown>
          </div>
          <img src={fundadores} alt="fotografía de fundadores del club" />
        </div>
      </section>
    </main>
  );
}

export default Nosotros;
