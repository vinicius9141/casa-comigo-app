import React, { useState } from 'react';
import Header from './components/Header';
import QuestionModal from './components/QuestionModal';
import SuccessModal from './components/SuccessModal';
import History from './components/History';

const questions = [
  {
    question: 'Qual seu nome?',
    answer: 'Ingrid',
    tips: 'Letras maiusculas importam.'
  },
  {
    question: 'Qual a soma do dia em que eu te pedi em namoro?',
    answer: '3',
    tips: 'Maior que 2 e  menor que 4'
  },
  {
    question: 'Qual o tamanho que voce me ama?',
    answer: 'Do tamanho da muralha da china',
    tips: 'Não é a maior coisa do mundo'
  },
  {
    question: 'Qual o nome do morto que conheceu antes de mim?',
    answer: 'Tiriri',
    tips: 'Ta morto'
  },
   {
    question: 'Quem voce conheceu antes de mim?',
    answer: 'Sogra',
    tips: 'A sua mae é minha...'
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
      {/* <Header /> */}
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
