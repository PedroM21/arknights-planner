import "../css/OperatorHero.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function OperatorHero() {
  const location = useLocation();
  const operator = location.state?.operator;

  const [currentIndex, setCurrentIndex] = useState(0);

  const operatorGallery = [
    operator?.variants?.default,
    operator?.variants?.e1,
    operator?.variants?.e2,
  ].filter(Boolean);

  if (!operator) return <div>No operator selected.</div>;

  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="operator-hero">
      <div className="operator-intro">
        <h1>{operator.name}</h1>
        <h4>Character Info//</h4>
        <p>{operator.biography}</p>
      </div>
      <div className="slideshow">
        <div className="column-dots">
          {operatorGallery.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => changeImage(index)}
            ></span>
          ))}
        </div>
        <div className="operator-image">
          <img src={operatorGallery[currentIndex]} alt={operator.name}></img>
        </div>
      </div>
    </div>
  );
}

export default OperatorHero;
