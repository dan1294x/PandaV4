import React from 'react';
import '../styles/TrustResults.css';

const TrustResults = () => {
  const kpis = [
    { metric: '15%', description: 'Rentabilidad anual promedio' },
    { metric: '10+', description: 'Años de experiencia' },
    { metric: '1000+', description: 'Inversores satisfechos' }
  ];

  const testimonials = [
    {
      text: "La gestión profesional y la transparencia de PANDA HOLDING han superado mis expectativas.",
      author: "María G., Inversora desde 2020"
    },
    {
      text: "Un enfoque innovador que combina seguridad y rendimiento.",
      author: "Carlos R., Inversor Institucional"
    }
  ];

  return (
    <section className="trust-results" id="results">
      <h2>Confianza y Resultados</h2>
      
      <div className="kpis-container">
        {kpis.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <h3>{kpi.metric}</h3>
            <p>{kpi.description}</p>
          </div>
        ))}
      </div>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <cite>{testimonial.author}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustResults;
