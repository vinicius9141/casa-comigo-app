import React, { useEffect, useState } from 'react';

const History = () => {
  // Data inicial fixa (exemplo)
  const startDate = new Date('2025-03-01T00:00:00');

  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - startDate; // diferença em ms

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

  
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Eu sei que sempre digo que sempre te amei mas em numeros:</h2>
      <p style={timeStyle}>
        {timeElapsed.days} <span style={{fontWeight: '400'}}>dias</span>,{' '}
        {timeElapsed.hours} <span style={{fontWeight: '400'}}>horas</span>,{' '}
        {timeElapsed.minutes} <span style={{fontWeight: '400'}}>minutos</span> e{' '}
        {timeElapsed.seconds} <span style={{fontWeight: '400'}}>segundos</span>
      </p>
    </div>
  );
};


  const containerStyle = {
    maxWidth: 400,
    margin: '40px auto',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#282c34',
    color: '#61dafb',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
  };

  const timeStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginTop: 15,
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: 1.2,
  };
export default History;
