import '../styles/Hero.css';

const Hero = () => {
  const scrollToStrategy = () => {
    const strategySection = document.getElementById('strategy');
    strategySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Invertimos con inteligencia, crecemos con vision.</h1>
        <p className="subtitle">Fondo privado de inversión con visión global y estrategias diversificadas.</p>
        <button className="cta-button" onClick={scrollToStrategy}>
          Conoce nuestras estrategias
        </button>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
