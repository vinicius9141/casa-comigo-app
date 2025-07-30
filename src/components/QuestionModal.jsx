import React, { useState } from 'react';

const QuestionModal = ({ questionData, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showTip, setShowTip] = useState(false);

  const handleSubmit = () => {
    const isCorrect = userAnswer.trim().toLowerCase() === questionData.answer.toLowerCase();
    onAnswer(isCorrect);
    setUserAnswer('');
    setShowTip(false);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>{questionData.question}</h2>

        {showTip && (
          <p style={styles.tip}><strong>Dica:</strong> {questionData.tips}</p>
        )}

        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Digite sua resposta"
          style={styles.input}
        />

        <div style={styles.buttonGroup}>
          <button onClick={() => setShowTip(true)} style={styles.tipButton}>
            Ver dica
          </button>
          <button onClick={handleSubmit} style={styles.submitButton}>
            Enviar
          </button>
        </div>
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
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    padding: '2rem',
    width: '100%',
    maxWidth: '450px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#111827',
  },
  tip: {
    backgroundColor: '#fef3c7',
    padding: '0.75rem',
    borderRadius: '8px',
    color: '#92400e',
    fontSize: '0.95rem',
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    outline: 'none',
    marginBottom: '1rem',
    transition: 'border 0.2s ease-in-out',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  tipButton: {
    flex: 1,
    backgroundColor: '#facc15',
    color: '#111827',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.2s',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#1eaf73ff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.2s',
  },
};

export default QuestionModal;
