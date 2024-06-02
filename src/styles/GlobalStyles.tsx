import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: Arial, sans-serif;
      }
    `}
  />
);

export default GlobalStyles;