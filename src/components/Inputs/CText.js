import React from 'react';

import styled from 'styled-components';

const CTextStyle = styled.input`
  border-radius: 5px;
  background-color: transparent;
  height: 25px;
  width: 100%;
  border: 1px solid #cfcfcf;
  padding: 5px;
`;

function CText({ handleValueChange, ...props }) {
  return <CTextStyle onChange={handleValueChange} {...props} />;
}

export default CText;
