import "../css/OperatorInfo.css";
import { useLocation } from "react-router-dom";

function OperatorInfo() {
  const location = useLocation();
  const operator = location.state?.operator;

  const operatorClass = operator?.class?.[0];

  if (!operator) return <div>No operator selected.</div>;

  return (
    <div className="operator-info-card">
      <h1>Info</h1>
      <div className="operator-info-content">
        <div className="operator-info-left">
          <div className="name-info">
            <span className="title">Name: </span>
            <span className="info">{operator.name}</span>
          </div>
          <hr className="hr-style"></hr>
          <div className="affiliation-info">
            <span className="title">Affiliation: </span>
            <span className="info">
              {Array.isArray(operator.affiliation)
                ? operator.affiliation.join(", ")
                : operator.affiliation}
            </span>
          </div>
          <hr className="hr-style"></hr>
          <div className="class-info">
            <span className="title">Class: </span>
            <span className="info">{operatorClass}</span>
          </div>
          <hr className="hr-style"></hr>
          <div className="rarity-info">
            <span className="title">Rarity: </span>
            <span className="info">{operator.rarity}★</span>
          </div>
          <hr className="hr-style"></hr>
          <div className="va-info">
            <span className="title">VA: </span>
            <span className="info">{operator.va}</span>
          </div>
          <hr className="hr-style"></hr>
        </div>
        <div className="operator-info-right">
          <div className="dob-info">
            <span className="title">Birthday: </span>
            <span className="info">{operator.lore.birthday}</span>
          </div>
          <hr className="hr-style"></hr>
          <div className="height-info">
            <span className="title">Height: </span>
            <span className="info">{operator.lore.height}</span>
          </div>
          <hr className="hr-style"></hr>
          <div className="gender-info">
            <span className="title">Gender: </span>
            <span className="info">{operator.lore.gender}</span>
          </div>
          <hr className="hr-style"></hr>
          <div className="race-info">
            <span className="title">Race: </span>
            <span className="info">{operator.lore.race}</span>
          </div>
          <hr className="hr-style"></hr>
          <div className="artist-info">
            <span className="title">Artist:</span>
            <span className="info">{operator.artist}</span>
          </div>
          <hr className="hr-style"></hr>
        </div>
      </div>
    </div>
  );
}

export default OperatorInfo;
