import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import QuizPage from './components/QuizPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import GlobalStyles from './styles/GlobalStyles';
import {Helmet} from "react-helmet"

const App: React.FC = () => {
  return (
    <Router>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Kyryll's App</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;