import styled, { keyframes, css } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const rotatecss = css`
  ${rotate} 2s linear infinite
`;

export const MusicCardStyle = styled.div`
  display: grid;
  grid-template-rows: auto 20px;
  .middle {
    img {
      animation: ${props => (props.spin ? rotatecss : '')};
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .bottom {
    font-weight: bold;
    color: #ed2530;
    display: grid;
    align-items: center;
    justify-items: center;
  }
`;
