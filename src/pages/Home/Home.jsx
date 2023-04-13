import { Link } from "react-router-dom";

import { useContext } from "react";
import { ContextBreed } from "../../context/BreedContext";

import FormBreed from "../../components/FormBreed";
import BreedItem from "../../components/BreedItem";
import Favorites from "../Favorites/Favorites";
import Navbar from "../../components/Navbar";

const Home = () => {
  const { breedName, dogs, setDogs, error, displayFavorites, displayFav } =
    useContext(ContextBreed);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="w-full">
        <Navbar />
      </header>
      <section className="flex-col relative top-0 left-0">
       

        {/* <div>
          <h3> Mas buscados</h3>
          <ul className="flex gap-2">
            <li>
            <Link to="/pitbull">Pitbull</Link>
            </li>
            <li>
            <Link to="/husky">Husky</Link>
            </li>
            <Link to="/doberman">Doberman</Link>
          </ul>
        </div> */}
        {error ? (
          <div className="w-full flex flex-col-reverse items-center gap-6">
            <h2 className="text-center text-black-50 text-3xl">
              Ups.. no hay resultados, intenta con otra busqueda!
            </h2>
            <img
              className="w-36"
              src="https://cdn-icons-png.flaticon.com/512/2909/2909736.png"
            />
          </div>
        ) : (
          <div style={{ columnCount: 2, columnWidth: 50 }} className="p-3">
            {dogs.map((dog, idx) => (
              <BreedItem dog={dog} key={idx} />
            ))}
          </div>
        )}
      </section>

      <Favorites />
    </div>
  );
};

export default Home;
