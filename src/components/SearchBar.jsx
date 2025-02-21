import "../css/SearchBar.css";
import { Link } from "react-router-dom";

function SearchBar({
  searchQuery,
  setSearchQuery,
  setOperators,
  allOperators,
}) {
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!Array.isArray(allOperators)) {
      console.error("allOperators is not an array: ", allOperators);
      return;
    }

    if (!searchQuery.trim()) {
      setOperators(allOperators);
      return;
    }

    const filteredOperators = allOperators.filter((operator) =>
      operator.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setOperators(filteredOperators);
  };

  return (
    <div className="top-bar">
      <Link to="/Planner">
        <button className="planner-btn">View Planner</button>
      </Link>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for operator..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
