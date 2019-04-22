import React from 'react';
import './Card.css';
import CardBanner from './components/CardComponents/CardBanner.js';
import CardContent from './components/CardComponents/CardContent.js';



function CardContainer() {
  return (
      <div className="card-container">
            <CardBanner />
            <CardContent />
         </div>
      );
}
// https://www.reactjs.org
export default CardContainer;

