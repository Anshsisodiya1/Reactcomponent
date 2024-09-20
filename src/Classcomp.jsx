import React, { Component } from 'react';

class Classcomp extends Component   {
  render() {
    const inlineStyle = {
      backgroundColor: '#ffb4a2',
      padding: '20px',
      borderRadius: '10px',
      fontSize: '18px',
      margin: '20px',
    };

    return (
      <div style={inlineStyle}>
        <h2>This is created using Class Component</h2>
        <p>This is done using external CSS</p>
        <p>This is done using inline CSS</p>
      </div>
    );
  }
}

export default Classcomp;
