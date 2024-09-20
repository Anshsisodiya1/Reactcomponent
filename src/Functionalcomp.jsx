import React from 'react';

const Functionalcomp = () => {
  const inlineStyle = {
    backgroundColor: '#a8dadc',
    padding: '20px',
    borderRadius: '10px',
    fontSize: '18px',
    margin: '20px',
  };

  return (
    <div style={inlineStyle}>
      <h2>This is created using Functional Component</h2>
      <p>This is done using external CSS</p>
      <p>This is done using inline CSS</p>
    </div>
  );
};

export default Functionalcomp;