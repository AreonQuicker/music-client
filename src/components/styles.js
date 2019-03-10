import styled from 'styled-components';

export const MusicGridStyle = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      ${props => props.theme.musicCardWidth},
      ${props => props.theme.musicCardWidth}
    )
  );
  grid-gap: 10px;
  grid-auto-rows: ${props => props.theme.musicCardHeight};
`;
