import "../css/OperatorSkills.css";
import { useLocation } from "react-router-dom";

function OperatorSkills() {
  const location = useLocation();
  const operator = location.state?.operator;

  return (
    <div className="operator-skills-card">
      <h1>Skills</h1>
      <div className="operator-skills-content">
        {operator.skills && operator.skills.length > 0 ? (
          <div className="table-style">
            <table>
              <thead>
                <tr>
                  <th className="skill-name">Skill Name</th>
                  <th className="skill-activation">Activation</th>
                  <th className="skill-level">Level</th>
                  <th className="skill-desc">Description</th>
                  <th className="skill-dur">Duration</th>
                </tr>
              </thead>
              <tbody>
                {operator.skills.map((skill, skillIndex) =>
                  skill.variations.map((variation, varIndex) => (
                    <tr key={`${skillIndex}-${varIndex}`}>
                      <td>{varIndex === 0 ? skill.name : ""}</td>
                      <td>{varIndex === 0 ? skill.skill_activation : ""}</td>
                      <td>{variation.level}</td>
                      <td>{variation.description}</td>
                      <td>{variation.duration}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No costs available</p>
        )}
      </div>
    </div>
  );
}

export default OperatorSkills;
