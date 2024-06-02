import React, {ReactElement} from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

const HomePage = ():ReactElement => {
  return (
    <Container>
      <h1>Welcome to the Quiz App</h1>
      <NavContainer>
        <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Login</NavLink>
        <NavLink to="/quiz" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Take Quiz</NavLink>
      </NavContainer>
    </Container>
  );
};

export default HomePage;