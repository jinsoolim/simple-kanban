import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: 'Helvetica Neue', sans-serif;
        }
        & * {
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default GlobalStyles;