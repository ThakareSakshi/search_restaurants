import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < parseInt(rating) ? 'star filled' : 'star'}>
      ★
    </span>
  ));

  return <div className="star-rating">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
