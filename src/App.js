// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componentes/header';
import Inicio from './paginas/inicio';
import Nosotros from './paginas/nosotros';
import Contacto from './componentes/contacto';
import Footer from './componentes/footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
