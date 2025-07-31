import React, { useState } from 'react';
import QuestionModal from './components/QuestionModal';
import SuccessModal from './components/SuccessModal';
import History from './components/History';

const questions = [
  {
    question: 'Qual seu nome?',
    answers: ['Ingrid', 'Amor'],
    tips: 'Letras maiúsculas importam.'
  },
  {
    question: 'Qual a soma do dia em que eu te pedi em namoro?',
    answers: ['3', 'três'],
    tips: 'Maior que 2 e menor que 4'
  },
  {
    question: 'Qual o tamanho que você me ama?',
    answers: ['Do tamanho da muralha da china', 'muralha da china'],
    tips: 'Não é a maior coisa do mundo e isso faz parte: "Do tamanho da..."'
  },
  {
    question: 'Qual o nome do morto que conheceu antes de mim?',
    answers: ['Tiriri', 'tiriri'],
    tips: 'Tá morto'
  },
  {
    question: 'Quem você conheceu antes de mim?',
    answers: ['Sogra', 'minha sogra'],
    tips: 'A sua mãe é minha...'
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false); // ✅ Adicionado

  const handleAnswer = (userAnswer) => {
    const currentQ = questions[currentQuestion];

    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedAnswers = currentQ.answers.map(ans => ans.toString().toLowerCase());

    const isCorrect = normalizedAnswers.includes(normalizedUserAnswer);

    setUserAnswers([...userAnswers, {
      question: currentQ.question,
      userAnswer,
      isCorrect
    }]);

    if (isCorrect) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowSuccessModal(true);
        setQuizCompleted(true); // ✅ Marcado como concluído
      }
    } else {
      alert('Resposta incorreta. Tente novamente.');
    }
  };

  const handleFinal = () => {
    setShowSuccessModal(false);
    // `quizCompleted` já está true, então o modal não volta
  };

  return (
    <div className="app">
      <History answers={userAnswers} />

      {!quizCompleted && !showSuccessModal && (
        <QuestionModal
          questionData={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}

      {showSuccessModal && (
        <SuccessModal onFinal={handleFinal} />
      )}
    </div>
  );
}

export default App;
