import React from 'react';
import Card from './Card';
import './CardList.css';

function CardList() {
  return (
    <div className="card-list">
      <h1>Current product availability</h1>
      <div className="card-container">
        <div className="card-wrapper">
          <ul className="card-items">
            <Card
              src="https://tierra.com/wp-content/uploads/2018/02/T1096300-303-800x973.jpg"
              text="Baby yoda is cute."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardList;
