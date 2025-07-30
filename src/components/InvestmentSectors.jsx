import React from 'react';
import '../styles/InvestmentSectors.css';

const InvestmentSectors = () => {
  const sectors = [
    { name: 'Tecnología', icon: '💻' },
    { name: 'Energías renovables', icon: '🌱' },
    { name: 'Bienes raíces', icon: '🏢' },
    { name: 'Private equity', icon: '🤝' },
    { name: 'Criptoactivos regulados', icon: '🔒' }
  ];

  return (
    <section className="investment-sectors" id="sectors">
      <h2>Sectores de Inversión</h2>
      <div className="sectors-grid">
        {sectors.map((sector, index) => (
          <div key={index} className="sector-card">
            <span className="sector-icon">{sector.icon}</span>
            <h3>{sector.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentSectors;
