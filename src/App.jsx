import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { getAllDogs } from "./services/getDogs";
import { useEffect } from "react";
import FormBreed from "./components/FormBreed";
import { BreedProvider, ContextBreed } from "./context/BreedContext";
import { useContext } from "react";
import { Home } from "./pages";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <div className="wd-full min-h-screen ">
      <BreedProvider>
        <Home />
      </BreedProvider>
    </div>
  );
}

export default App;
