import { useState } from "react";
import { createContext } from "react";
import { getAllDogs } from "../services/getDogs";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import Swal from 'sweetalert2'

export const ContextBreed = createContext();

export const BreedProvider = ({ children }) => {
  const [breedName, setBreedName] = useState("");
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
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
      
      Toast.fire({
        icon: 'success',
        title: 'se agrego correctamente'
      })
      // alert("se agrego correctamente");
      setFavorites([...favorites, imgURL]);
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
      
      Toast.fire({
        icon: 'error',
        title: 'se elimino correctamente'
      })
     
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
