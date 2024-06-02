import React, {ReactElement, useState} from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import quizData from '../quizData.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Question = styled.div`
    margin-bottom: 20px;
    font-size: 20px;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
`;

const Option = styled.button`
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
`;

const Feedback = styled.div<{ isCorrect: boolean }>`
    color: ${(props) => (props.isCorrect ? 'green' : 'red')};
    margin-top: 10px;
`;

const QuizPage = ():ReactElement => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const navigate = useNavigate();

  const question = quizData.questions[currentQuestion];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (option === question.correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Wrong!');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setFeedback(null);
    } else {
      navigate('/');
    }
  };

  return (
    <Container>
      <h1>Quiz</h1>
      <Question>{question.question}</Question>
      <Options>
        {question.options.map((option) => (
          <Option
            key={option}
            onClick={() => handleSelect(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </Option>
        ))}
      </Options>
      {feedback && (
        <Feedback isCorrect={feedback === 'Correct!'}>{feedback}</Feedback>
      )}
      {selectedOption !== null && (
        <button onClick={handleNextQuestion}>
          {currentQuestion < quizData.questions.length - 1
            ? 'Next Question'
            : 'Finish Quiz'}
        </button>
      )}
    </Container>
  );
};

export default QuizPage;