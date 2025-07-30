import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    investment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
    // Resetear el formulario
    setFormData({ name: '', email: '', investment: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className="contact-form" id="contact">
      <div className="form-container">
        <h2>¿Listo para invertir con visión?</h2>
        <p>Completa tus datos y recibe nuestro dossier exclusivo para inversores.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre completo"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="number"
              name="investment"
              value={formData.investment}
              onChange={handleChange}
              placeholder="Interés de inversión (€)"
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            Solicitar información
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
