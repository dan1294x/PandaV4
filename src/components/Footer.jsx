import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>PANDA HOLDING</h3>
          <p>"Invertir es construir el futuro."</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Legal</h4>
            <ul>
              <li><a href="#aviso-legal">Aviso legal</a></li>
              <li><a href="#privacidad">Privacidad</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div className="social-links">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PANDA HOLDING. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
