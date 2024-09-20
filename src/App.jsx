
import React, { useState } from 'react';
import FunctionalComponent from './Functionalcomp';
import ClassComponent from './Classcomp';
import './App.css'; 

const App = () => {
  const [showComponent, setShowComponent] = useState(false);
  const[classComponent, setclassComponent] = useState(false);

  return (
    <div className="app">
      <h1>Styling using Functional and Class Component</h1>
      
      <div className="button-container">
        <button onClick={() => setShowComponent(!showComponent)}>
          To see styling in functional component
        </button>
        <button onClick={() => setclassComponent(!classComponent)}>
          To see styling in class component
        </button>
      </div>
      
      <div className="component-display">
        {showComponent && <FunctionalComponent />}
        {classComponent && <ClassComponent />}
      </div>
    </div>
  );
}

export default App;
