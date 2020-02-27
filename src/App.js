import React, {useState} from 'react';
import './App.css';

//Functional component APP (Name is arbitrary but common)
function App() {
  
  //This function uses hooks to save the counter data and update it on a button onClick listener
  const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    //FunctionalCounter will return what I want this specific component to render
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  
//The entire App Functional will return the full page layout (This is completely by design)
  return (
    <div className="App">
      <header className="App-header">
        <img src="MyRTWhite.png" className="App-logo" alt="logo" />
        <p>
          This is my button incrementing React.js application. 
  
        </p>
        {FunctionalCounter()}
      </header>
    </div>
  );
} 

export default App;
