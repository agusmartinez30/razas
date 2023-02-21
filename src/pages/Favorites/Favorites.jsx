import React from "react";
import { useContext } from "react";
import BreedItemFav from "../../components/BreedItemFav";
import { ContextBreed } from "../../context/BreedContext";

const Favorites = () => {
  const { favorites, displayFav, displayFavorites } = useContext(ContextBreed);
  console.log(favorites);
  return (
    <>
      {displayFav ? (
        <section
          className="bg-green-300 w-full md:w-96"
          style={{
            height: "100vh",
            position: "fixed",
            top: "0",
            right: "0",
            overflow: "scroll",
          }}
        >
          <section className="relative top-12">
            <h2 className="text-center text-gray-800 font-medium text- text-5xl py-6">
              Favoritos
            </h2>
            <div style={{ columnCount: 2, columnWidth: 300, padding: "15px" }}>
              {favorites.map((fav) => (
                <BreedItemFav fav={fav} />
              ))}
            </div>
          </section>
        </section>
      ) : (
        <section
          style={{
            width: "950px",
            height: "100vh",
            position: "fixed",
            top: "0",
            right: "-100%",
            backgroundColor: "yellowgreen",
            padding: "10px",
            display: "none",
            transition: "ease-in-out",
          }}
        >
          <section style={{ transition: "ease-in-out" }}>
            <h2 className="text-center text-gray-50 text-4xl py-6">
              Favoritos
            </h2>
            <div style={{ columnCount: 3, columnWidth: 250 }}>
              {favorites.map((fav) => (
                <BreedItemFav fav={fav} />
              ))}
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default Favorites;
