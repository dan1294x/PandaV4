import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Estrategia', href: '#strategy' },
    { label: 'Sectores', href: '#sectors' },
    { label: 'Resultados', href: '#results' },
    { label: 'Contacto', href: '#contact' }
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">PANDA HOLDING</a>
        <nav className="navbar-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
