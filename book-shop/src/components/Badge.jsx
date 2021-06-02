import React from 'react';

const Badge = ({ text, color }) => {
  return (
    <div>
      <Badge bg={color}>{text}</Badge>
    </div>
  );
};

export default Badge;
