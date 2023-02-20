import React from "react";
import { useContext } from "react";
import { ContextBreed } from "../context/BreedContext";

const BreedItemFav = ({ fav }) => {
  const { toggleFavorite } = useContext(ContextBreed);

  return (
    <div className="relative ">
      <img className="w-96 rounded-lg mb-2" src={fav} />
      <button
        onClick={(e) => toggleFavorite(e)}
        // ref={breedRef}
        className="absolute  top-2 left-2 rounded-full  w-10 h-10 bg bg-white"
      >
      ❤️
      </button>
    </div>
  );
};

export default BreedItemFav;
