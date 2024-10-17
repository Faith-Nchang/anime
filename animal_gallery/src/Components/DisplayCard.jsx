import React from 'react';
import './DisplayCard.css'; // Assuming you create a CSS file for styling
import FeatureButton from './FeatureButton';

const DisplayCard = ({ image, name, country, weight, life_span, width, height, id, onBanClick }) => {
  return (
    <div className="display-card">
      {/* Name */}
      <h2 className="display-card__name">{name}</h2>

      {/* Features */}
      <div className="features">
        {height && height !== 'unknown' && (
          <FeatureButton title={`Height: ${height}`} onClick={() => onBanClick(`Height: ${height}`)} />
        )}
        {id && id !== 'unknown' && (
          <FeatureButton title={`ID: ${id}`} onClick={() => onBanClick(`ID: ${id}`)} />
        )}
        {width && width !== 'unknown' && (
          <FeatureButton title={`Width: ${width}`} onClick={() => onBanClick(`Width: ${width}`)} />
        )}
        {weight && weight !== 'unknown' && (
          <FeatureButton title={`Weight: ${weight}`} onClick={() => onBanClick(`Weight: ${weight}`)} />
        )}
        {life_span && life_span !== 'unknown' && (
          <FeatureButton title={`Life Span: ${life_span}`} onClick={() => onBanClick(`Life Span: ${life_span}`)} />
        )}
        {country && country !== 'unknown' && (
          <FeatureButton title={`Origin: ${country}`} onClick={() => onBanClick(`Origin: ${country}`)} />
        )}
      </div>

      {/* Image */}
      <img src={image} alt={name} className="display-card__image" width="400" height="300" />
    </div>
  );
};

export default DisplayCard;
