import React, {ReactElement} from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundPage = ():ReactElement => {
  return (
    <Container>
      <h1>Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </Container>
  );
};

export default NotFoundPage;