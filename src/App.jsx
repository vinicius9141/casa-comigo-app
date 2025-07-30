import React, { useState } from 'react';
import Header from './components/Header';
import QuestionModal from './components/QuestionModal';
import SuccessModal from './components/SuccessModal';
import History from './components/History';

const questions = [
  {
    question: 'Qual a capital do Brasil?',
    answer: 'vini',
    tips: 'É uma cidade planejada no centro do país.'
  },
  {
    question: '2 + 2 = ?',
    answer: '4',
    tips: 'É o dobro de 2.'
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowSuccessModal(true);
        setQuizCompleted(true); // marca como finalizado
      }
    } else {
      alert('Resposta incorreta. Tente novamente.');
    }
  };

  const handleFinal = () => {
    setShowSuccessModal(false);
    setQuizCompleted(true);
  };

  return (
    <div>
      <Header />
      <History/>
      {!quizCompleted && !showSuccessModal && (
        <QuestionModal
          questionData={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
      {showSuccessModal && <SuccessModal onFinal={handleFinal} />}

    </div>
  );
}

export default App;
