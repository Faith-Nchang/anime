import React from 'react';
// import './DisplayCard.css'; // Assuming you create a CSS file for styling
import FeatureButton from './FeatureButton';

const DisplayCard = ({ image, name, country, weight, life_span, width, height, onBanClick }) => {
  return (
    <div className="display-card">
      {/* Name */}
      <h3 className="display-card__name">{name}</h3>

      {/* Features */}
      <div className="features">
        <FeatureButton title={`height: ${height}`} onClick={() => onBanClick(height)} />
        <FeatureButton title={`width: ${width}`} onClick={()=> onBanClick(width)} />
        <FeatureButton title={`weight: ${weight}`} onClick={() => onBanClick(weight)} />
        <FeatureButton title={`life span: ${life_span}`} onClick={() => onBanClick(life_span)} />
        <FeatureButton title={`origin: ${country}`} onClick={() => onBanClick(country)} />
        
      </div>

      {/* Image */}
      <img src={image} alt={name} className="display-card__image" width="300" />
      
     
      
    </div>
  );
};

export default DisplayCard;
