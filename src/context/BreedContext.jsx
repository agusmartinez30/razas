import { useState } from "react";
import { createContext } from "react";
import { getAllDogs } from "../services/getDogs";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

export const ContextBreed = createContext();

export const BreedProvider = ({ children }) => {
  const [breedName, setBreedName] = useState("hound");
  const [dogs, setDogs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(false);
  const [displayFav, setDisplayFav] = useState(false);

  const toggleFavorite = (e) => {
    const data = e.currentTarget.parentElement;
    let imgURL = data.querySelector("img").getAttribute("src");
    let dataMovie = {
      imgURL,
    };

    let breedArray = favorites.find((breed) => breed === dataMovie.imgURL);

    if (!breedArray) {
      alert("se agrego correctamente");
      setFavorites([...favorites, imgURL]);
    } else {
      alert("se elimino correctamente");
      let removeFavBreed = favorites.filter(
        (breed) => breed !== dataMovie.imgURL
      );

      setFavorites(removeFavBreed);
    }
  };
  const displayFavorites = () => {
    setDisplayFav(!displayFav)
  };

  const handleBreed = async (e) => {
    e.preventDefault();
    try {
      setDogs(await getAllDogs(breedName));
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  // useEffect(async () => {
  //   try {
  //     setDogs(await getAllDogs(id));
  //     setError(false);
  //   } catch (error) {
  //     setError(true);
  //   }
  // }, []);

  return (
    <ContextBreed.Provider
      value={{
        breedName,
        setBreedName,
        dogs,
        setDogs,
        handleBreed,
        error,
        toggleFavorite,
        favorites,
        displayFavorites,
        displayFav
      }}
    >
      {children}
    </ContextBreed.Provider>
  );
};
