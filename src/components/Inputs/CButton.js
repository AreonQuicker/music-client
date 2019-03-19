import React from 'react';
import styled from 'styled-components';

const CButtonStyle = styled.input`
  padding: 5px;
  width: 100px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #cfcfcf;
  cursor: pointer;
`;

function CButton({ value, onClickHandle, ...props }) {
  return <CButtonStyle {...props} value={value} />;
}

export default CButton;
