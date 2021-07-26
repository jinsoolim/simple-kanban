import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: 'Helvetica Neue', sans-serif;
          background-color: #d0d0d0;
          background-image: url(http://images.freecreatives.com/wp-content/uploads/2016/02/High-Quality-Dark-Wood-Texture.jpg);
        }
        & * {
          letter-spacing: .7px;
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default GlobalStyles;