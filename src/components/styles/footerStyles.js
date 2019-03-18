import styled from 'styled-components';

export const FooterStyle = styled.div`
  background-color: #f6f6f6;
  height: ${props => props.theme.footerHeight};
  border-top: 1px solid #aeaeae;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
`;
