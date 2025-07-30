import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const values = [
    { icon: '🔍', title: 'Transparencia', description: 'Gestión clara y comunicación abierta' },
    { icon: '📊', title: 'Diversificación', description: 'Estrategias balanceadas para optimizar retornos' },
    { icon: '📈', title: 'Rentabilidad', description: 'Enfoque en resultados sostenibles' },
    { icon: '🎯', title: 'Experiencia', description: 'Equipo experto en mercados globales' }
  ];

  return (
    <section className="about-us" id="about">
      <h2>Sobre Nosotros</h2>
      <div className="about-content">
        <p className="about-description">
          PANDA HOLDING es un fondo de inversión líder comprometido con la excelencia en la gestión de activos. 
          Nuestro enfoque combina análisis profundo, innovación y gestión de riesgos para maximizar el valor 
          para nuestros inversores.
        </p>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <span className="value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
