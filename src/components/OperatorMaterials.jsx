import "../css/OperatorMaterials.css";
import { useLocation } from "react-router-dom";

function OperatorMaterials() {
  const location = useLocation();
  const operator = location.state?.operator;

  return (
    <div className="operator-materials-card">
      <h1>Materials</h1>
      <div className="operator-costs-content">
        {operator.costs && operator.costs.length > 0 ? (
          <ul>
            {operator.costs.map((cost, index) => (
              <>
                <li key={index}>
                  <span>{cost.name}</span>
                  <span>{cost.amount}</span>
                </li>
              </>
            ))}
          </ul>
        ) : (
          <p>No costs available</p>
        )}
      </div>
    </div>
  );
}

export default OperatorMaterials;
