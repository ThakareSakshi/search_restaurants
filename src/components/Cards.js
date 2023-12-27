import React from "react";
import StarRating from "./StarRating";

// import Cards from './Cards'

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-info-container">
        <h2>{props.name} 
        <StarRating rating={props.rating} /></h2>
        <p>
          <i class="fa-solid fa-location-dot"></i> {props.address},
          {props["address line 2"]}
        </p>
        <p>
          {props.outcode} {props.postcode}
        </p>
      </div>
      <div className="type_of_food">
        <p>
          <i class="fa-solid fa-utensils"></i> {props.type_of_food}
        </p>
        <a href="">Visit Menu</a>
      </div>
    </div>
  );
};

export default Cards;
