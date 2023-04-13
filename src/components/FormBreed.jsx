import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ContextBreed } from "../context/BreedContext";

const FormBreed = () => {
  const { setBreedName, handleBreed } = useContext(ContextBreed);

  const handleInput = (e) => {
    const word = e.target.value.toLowerCase()
    setBreedName(word)
  }

  return (
    <form onSubmit={handleBreed} className="w-full md:w-1/2 m-auto flex gap-6 p-2 bg-slate-50 rounded-xl shadow-lg">
      <input
        className="w-full p-2 text-xl bg-transparent  focus:outline-none "
        data-type="breed"
        placeholder="Ingrese una raza de perro. EX: Boxer"
        onChange={handleInput}
      />
      <button className=" p-3 rounded-xl bg-red-300  text-white text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </form>


  );
};

export default FormBreed;
