import React from 'react';

function Card(props) {
  return (
    <>
      <li className="card-item">
        <div className="card-item-link">
          <figure
            className="card-item-pic-wrap"
            data-category={props.price}
            style={{ backgroundColor: props.color }}
          >
            <img className="card-item-img" alt="Product" src={props.src} />
          </figure>
          <div className="card-item-info">
            <p className="card-item-name">{props.name}</p>
            <p className="card-item-maker"> by {props.manufacturer}</p>
            <h6 className="card-item-stock">
              {props.hasInfo ? '' + props.stock : 'stock unknown'}
            </h6>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
