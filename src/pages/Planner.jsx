import "../css/Planner.css";
import PlannerCard from "../components/PlannerCard";
import { useOperatorContext } from "../contexts/OperatorContext";
import { Link } from "react-router-dom";

function Planner() {
  const { favorites } = useOperatorContext();

  if (favorites.length == 0) {
    return <h1 className="empty-favs-list">No favorites added yet.</h1>;
  }

  return (
    <>
      <div className="top-bar">
        <Link to="/">
          <button className="home-btn">Home</button>
        </Link>
      </div>
      <div className="planner-container">
        {favorites.map((operator) => (
          <PlannerCard key={operator.name} operator={operator} />
        ))}
      </div>
    </>
  );
}

export default Planner;
