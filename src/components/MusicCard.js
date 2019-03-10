import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const MusicCardStyle = styled.div`
  display: grid;
  grid-template-rows: 100px 20px;
  img {
    animation: ${rotate} 2s linear infinite;
    height: 100%;
    width: 100%;
  }
  .bottom {
    font-family: monospace;
    font-weight: bold;
    color: #ed2530;
    display: grid;
    align-items: center;
    justify-items: center;
  }
`;

function MusicCard() {
  return (
    <MusicCardStyle>
      <div className="middle">
        <img src="./images/record.png" />
      </div>
      <div className="bottom">Song Name</div>
    </MusicCardStyle>
  );
}

export default MusicCard;
