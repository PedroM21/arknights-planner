import { createContext, useState, useContext, useEffect } from "react";

const OperatorContext = createContext();

export const useOperatorContext = () => useContext(OperatorContext);

export const OperatorProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    console.log("Updated favorites:", favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (operator) => {
    setFavorites((prev) => [...prev, operator]);
  };

  const removeFromFavorites = (operatorName) => {
    setFavorites((prev) =>
      prev.filter((operator) => operator.name !== operatorName)
    );
  };

  const isFavorite = (operatorName) => {
    return favorites.some((operator) => operator.name === operatorName);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <OperatorContext.Provider value={value}>
      {children}
    </OperatorContext.Provider>
  );
};
