import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';



function CardContainer() {
  return (
      <a class="anchor" href="https://www.reactjs.org">
            <div className="card-container">
                  <CardBanner />
                  <CardContent />
            </div>
      </a>
      );
}
// https://www.reactjs.org
export default CardContainer;






