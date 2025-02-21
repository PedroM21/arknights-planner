import "../css/Home.css";
import OperatorCard from "../components/OperatorCard";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import { fetchOperator } from "../services/akapi";
import operatorArt from "../json/operatorArt.json";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [operators, setOperators] = useState([]);
  const [allOperators, setAllOperators] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOperators = async () => {
      try {
        const operators = await fetchOperator();
        if (Array.isArray(operators)) {
          const mergedOperators = operators.map((operator) => ({
            ...operator,
            variants: operatorArt[operator.name] || {},
          }));

          setOperators(mergedOperators); // If the response is an array, set it directly
          setAllOperators(mergedOperators);
        } else if (operators && operators.results) {
          setOperators(operators.results); // If there's a results key, set it
          setAllOperators(operators.results);
        } else {
          setError("No operators found.");
        }
      } catch (err) {
        console.log(err);
        setError("Failed to get operators...");
      } finally {
        setLoading(false);
      }
    };

    loadOperators();
  }, []);

  return (
    <>
      <div className="home">
        <div className="home-search-bar">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setOperators={setOperators}
            allOperators={allOperators}
          />
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div className="operator-scroller">
              <div className="operators-grid">
                {operators && operators.length > 0 ? (
                  operators.map((operator, index) => (
                    <OperatorCard operator={operator} key={index} />
                  ))
                ) : (
                  <div>Operators currently unavailable.</div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
