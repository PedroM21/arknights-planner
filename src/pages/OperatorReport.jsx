import "../css/OperatorReport.css";
import OperatorHero from "../components/OperatorHero";
import OperatorInfo from "../components/OperatorInfo";
import OperatorMaterials from "../components/OperatorMaterials";
import OperatorSkills from "../components/OperatorSkills";
import { Link, useLocation } from "react-router-dom";
import { useOperatorContext } from "../contexts/OperatorContext";

function OperatorReport() {
  const location = useLocation();
  const operator = location.state?.operator;
  const { addToFavorites, isFavorite, removeFromFavorites } =
    useOperatorContext();

  return (
    <>
      <div className="nav-btns">
        <Link to="/">
          <button>Return</button>
        </Link>

        <button
          onClick={() =>
            isFavorite(operator.name)
              ? removeFromFavorites(operator.name)
              : addToFavorites(operator)
          }
        >
          {isFavorite(operator.name)
            ? "Remove from Favorites"
            : "Add to Favorites"}
        </button>

        <Link to="/Planner">
          <button>View Planner</button>
        </Link>
      </div>
      <OperatorHero />
      <OperatorInfo />
      <OperatorMaterials />
      <OperatorSkills />
    </>
  );
}

export default OperatorReport;
