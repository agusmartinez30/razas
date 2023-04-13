import React from "react";
import { useContext } from "react";
import { ContextBreed } from "../context/BreedContext";

const BreedItem = ({ dog }) => {
  const { toggleFavorite } = useContext(ContextBreed);

  return (
    <div className="relative ">
      <img className="w-96 rounded-lg mb-2" src={dog} />
      <button
        onClick={(e) => toggleFavorite(e)}
        // ref={breedRef}
        className="absolute  top-2 left-2 rounded-lg  w-10 h-10 bg-white "
      >
        🤍
      </button>
    </div>
  );
};

export default BreedItem;
