import React from 'react';
import '../styles/InvestmentStrategy.css';

const InvestmentStrategy = () => {
  const strategies = [
    {
      title: 'Análisis de datos globales',
      description: 'Utilizamos tecnología avanzada para analizar tendencias y oportunidades en mercados globales.'
    },
    {
      title: 'Diversificación inteligente',
      description: 'Distribuimos inversiones estratégicamente para optimizar rendimientos y minimizar riesgos.'
    },
    {
      title: 'Gestión activa con control de riesgos',
      description: 'Monitoreo constante y ajustes tácticos para proteger y hacer crecer su inversión.'
    }
  ];

  return (
    <section className="investment-strategy" id="strategy">
      <h2>Estrategia de Inversión</h2>
      <div className="strategy-cards">
        {strategies.map((strategy, index) => (
          <div key={index} className="strategy-card">
            <h3>{strategy.title}</h3>
            <p>{strategy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentStrategy;
