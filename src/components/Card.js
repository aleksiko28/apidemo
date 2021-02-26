import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className="card-item">
        <div className="card-item-link" to={props.path}>
          <figure className="card-item-pic-wrap" data-category={props.label}>
            <img
              className="card-item-img"
              alt="Product image"
              src={props.src}
            />
          </figure>
          <div className="card-item-info">
            <h5 className="card-item-text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
