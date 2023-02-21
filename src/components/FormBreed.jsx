import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ContextBreed } from "../context/BreedContext";

const FormBreed = () => {
  const { setBreedName, handleBreed } = useContext(ContextBreed);

  return (
    <form onSubmit={handleBreed} className="flex lg:flex-row flex-col gap-2 p-3">
      <input
        className="p-2 border border-gray-300 lg:w-80  text-2xl "
        data-type="breed"
        placeholder="Ingrese una raza de perro"
        onChange={(e) => setBreedName(e.target.value)}
      />
      <button className="w-full lg:w-40 p-3 rounded bg-green-600 text-white text-2xl">
        Buscar
      </button>
    </form>
  );
};

export default FormBreed;
