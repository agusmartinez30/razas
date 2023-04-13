import React, { useContext } from 'react'
import { ContextBreed } from '../context/BreedContext';
import FormBreed from './FormBreed';

export default function Navbar() {

  const { displayFavorites, displayFav, favorites } =
    useContext(ContextBreed);
  return (
    <>
      <nav className='relative top-0 left-auto z-10 flex flex-col md:flex-row items-center justify-between p-3 gap-2'>
        <img
          className="w-12"
          src="data:image/png;base64,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"
        />
        <div className=' w-full flex gap-2' >
          <FormBreed />
          <div className=" grid place-content-center place-items-center p-2">
            <button
              onClick={displayFavorites}
              class="w-full rounded-xl border border-red-300 text-red p-3 text-2xl hover:bg-gray-100"
            >
              {
                favorites.length > 0
                  ? (
                    <div className='flex items-center gap-2 '>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                      </svg>
                      <h2 className='text-red-500'>{favorites.length}</h2>
                    </div>

                  )

                  : (<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3C486B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>)
              }

            </button>
          </div>
          <div>

          </div>
        </div>


      </nav>
    </>
  )
}
