import React from 'react';
import './Card.css';
//        <h2>React makes it painless to create interactive UIs. Design simple views for each state in your application.</h2>
//        <a href="reactjs.org">reactjs.org</a>

const CardContent = () => {

    return (
      <div className = "card-content">
        <h4>Get started with React</h4>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your
        application.</p>
        <a href = "https://www.reactjs.org"><span>reactjs.org</span></a>
      </div>
    );
  
  };
  
  export default CardContent;