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
            // width: "950px",
            height: "100vh",
            position: "fixed",
            top: "0",
            right: "0",
            transition: "ease-in-out",
            padding: "10px",
            overflow: "scroll",
          }}
        >
          <section>
            <h2 className="text-center text-gray-50 text-5xl py-6">
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

// {!displayFav ? (

//   ) : (
//     <section
//       style={{ maxWidth: "800px",  overflowY: "auto", scrollBehavior: "smooth"}}
//       className="fixed top-0 right-0   bg-yellow-500 p-2 "
//     >
//       <h2 className="text-center text-gray-50 text-4xl py-6">Favoritos</h2>
//       <div style={{ columnCount: 3, columnWidth: 250 }}>
//         {favorites.map((fav) => (
//           <BreedItemFav fav={fav} />
//         ))}
//       </div>
//     </section>
//   )}
{
  /* 
        {displayFav ? (
          <div className="absolute top-6 -left-24 bg-red-500 ">
            <button
              onClick={displayFavorites}
              className="text-3xl p-5 text-white"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div style={
            {
              backgroundColor: "red",
              width: "160px",
              position: "absolute",
              top: "0",
              left: "-160px"
            }
          }>
            <button
              onClick={displayFavorites}
              className="text-3xl p-5  text-white"
            >
              Favoritos
            </button>
          </div>
        )} */
}
