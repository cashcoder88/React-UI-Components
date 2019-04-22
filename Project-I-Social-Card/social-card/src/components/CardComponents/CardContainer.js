import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';



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






