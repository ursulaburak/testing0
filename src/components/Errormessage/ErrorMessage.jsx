import React from 'react';

const ErrorMessage = ({ message, color }) => {
  return ( 
  <div
  style={{
    backgroundColor: color || "red",
  }}
    data-testid="message-container"
  >
    {message || "Birşeyler yolunda değil"}
  </div> 
  );
};


export default ErrorMessage;