import React from 'react';

const Button = ({ children, onClick, href }) => {
  const buttonStyles = {
    backgroundColor: '#566bb0',
    color: 'white',
    padding: '8px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none', // Для посилань
    display: 'inline-block' // Для посилань
  };

  if (href) {
    return (
      <a href={href} style={buttonStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;
