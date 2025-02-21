import "../css/OperatorCard.css";
import ErrorImage from "../images/specterQuestion.png";
import { Link } from "react-router-dom";
import { useOperatorContext } from "../contexts/OperatorContext";

function OperatorCard({ operator }) {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useOperatorContext();
  const favorite = isFavorite(operator.name);

  const operatorImage = operator?.variants?.default || ErrorImage;
  const operatorClass = operator?.class?.[0];

  const rarity = operator.rarity || 1;

  const rarityColors = {
    1: "white",
    2: "green",
    3: "blue",
    4: "purple",
    5: "yellow",
    6: "orange",
  };

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(operator.name);
      console.log("removed from favorites");
    } else {
      addToFavorites(operator);
      console.log("added to favorites");
    }
  }

  return (
    <div className="operator-card">
      <div className="operator-card-content">
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={onFavoriteClick}
        >
          ★
        </button>
        <div className="operator-card-image">
          <Link to="/OperatorReport" state={{ operator }}>
            <img
              src={operatorImage}
              alt={operator.name}
              onError={(e) => (e.target.src = ErrorImage)}
            />
          </Link>
        </div>

        <div className="operator-name">
          <p>{operator.name}</p>
        </div>
        <div
          className={`styled-box rarity-color ${
            operator.rarity === 6
              ? "rarity-6"
              : operator.rarity === 5
              ? "rarity-5"
              : operator.rarity === 4
              ? "rarity-4"
              : operator.rarity === 3
              ? "rarity-3"
              : operator.rarity === 2
              ? "rarity-2"
              : "rarity-1"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default OperatorCard;
