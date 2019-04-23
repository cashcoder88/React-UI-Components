import React from 'react';
import './App.css'; 
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';

const App = () => {
  return (
    <div className = "container">
        <HeaderContainer />
        <CardContainer />
    </div>
  );
};

export default App;

//const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);