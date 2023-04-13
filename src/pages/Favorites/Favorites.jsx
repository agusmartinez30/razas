import React from "react";
import { useContext } from "react";
import BreedItemFav from "../../components/BreedItemFav";
import { ContextBreed } from "../../context/BreedContext";

const Favorites = () => {
  const { favorites, displayFav, displayFavorites } = useContext(ContextBreed);
  return (
    <>
      {displayFav ? (
        <section
          className="w-full md:w-full z-20 bg-red-300 "
          style={{
            height: "100vh",
            position: "fixed",
            top: "0",
            right: "0",
            overflow: "scroll",
            transition: ".3s ease",
            overflowX: "hidden"
          }}
        >
          <section>
            <header className="flex items-center p-3 justify-around gap-4 ">
              <button onClick={displayFavorites} className=" rounded-xl border border-gray-900 text-red p-3 text-2xl hover:bg-red-300"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg></button>
              <h2 className="w-full text-center text-gray-800 font-medium text- text-5xl py-6">
                Favoritos
              </h2>
            </header>

            <div  className="p-3 columns-2 md:columns-5 column">
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
