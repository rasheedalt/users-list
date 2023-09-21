import React, { useContext } from 'react'
import { FavouriteContext } from '../context/FavouritesContext';

const FavouritesList = () => {
 const { favourites } = useContext(FavouriteContext);

 return (
    <div>
        <p className="text-gray-700 text-lg font-semibold py-2 text-center">Favourites</p>
        <ul >
            {
                Object.values(favourites).filter(fav => fav)?.map( (favourite, index) => (
                    <li
                        key={favourite?.ardaId}
                        className={`w-full py-4 ${ (index+1) === favourites.length ? null : "border-b-2 border-neutral-100 border-opacity-100  dark:border-opacity-50" }`}>
                        { favourite?.name }
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default FavouritesList;
