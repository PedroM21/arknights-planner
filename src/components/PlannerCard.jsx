import "../css/PlannerCard.css";
import { useState } from "react";

function PlannerCard({ operator }) {
  const operatorImage = operator?.variants?.e2;

  const [matCount, setMatCount] = useState(
    operator?.costs?.reduce((acc, cost) => {
      acc[cost.name] = "0";
      return acc;
    }, {}) || {}
  );

  const handleInputChange = (materialName, value) => {
    setMatCount((prev) => ({
      ...prev,
      [materialName]: value,
    }));
  };

  return (
    <div className="operator-planner-card">
      <h1>{operator.name}</h1>
      <div className="operator-planner-content">
        <div className="operator-image-card">
          <img src={operatorImage}></img>
        </div>
        <div className="operator-material-list">
          {operator.costs && operator.costs.length > 0 ? (
            <ul>
              {operator.costs.map((cost, index) => (
                <>
                  <li key={index}>
                    <div className="value-names">
                      <span>{cost.name}</span>
                    </div>
                    <div className="value-costs">
                      <input
                        type="number"
                        value={matCount[cost.name]}
                        onChange={(e) =>
                          handleInputChange(cost.name, e.target.value)
                        }
                        min="0"
                      />
                      {"/"}
                      <span>{cost.amount}</span>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          ) : (
            <p>No costs available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlannerCard;
