import React from 'react';
import './App.css'; 
import CardContainer from './components/CardComponents/CardContainer.js';


const App = () => {
  return (
    <div className = "container">
        <CardContainer />
    </div>
  );
};

export default App;

//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);