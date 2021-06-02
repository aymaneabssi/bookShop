import React from 'react';
import { Alert } from 'react-bootstrap';
const WarningSign = ({ text, variant }) => {
  return (
    <div>
      <Alert variant={variant}>{text}</Alert>
    </div>
  );
};

export default WarningSign;
