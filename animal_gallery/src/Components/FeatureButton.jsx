import './FeatureButton.css'

const FeatureButton = ({ title, onClick }) => {
    return (
      <button onClick={onClick} className="feature-button">
        {title}
      </button>
    );
  }
  
  export default FeatureButton;