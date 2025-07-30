import React from 'react';

const SuccessModal = ({ onFinal }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>🎉 Parabéns!</h2>
        <p style={styles.message}>Você respondeu todas as perguntas corretamente.</p>
        <button onClick={onFinal} style={styles.button}>Finalizar</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 999,
    padding: '1rem',
  },
  modal: {
    backgroundColor: '#f0fdf4',
    borderRadius: '12px',
    padding: '2rem',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.75rem',
    color: '#166534',
    marginBottom: '0.5rem',
  },
  message: {
    color: '#065f46',
    fontSize: '1rem',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#16a34a',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
};

export default SuccessModal;
