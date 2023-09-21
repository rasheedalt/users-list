import React, { useContext } from 'react'
import { FavouriteContext } from '../context/FavouritesContext';
const GNOME_BASE_URL =  process.env.REACT_APP_GNOME_BASE_URL

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
                        onClick={() => window.open(`${GNOME_BASE_URL + favourite?.username}`, '_blank')} 
                        className={`w-full py-4 text-center ${ (index+1) === favourites.length ? null : "border-b-2 border-neutral-100 border-opacity-100  dark:border-opacity-50 cursor-pointer" }`}>
                        { favourite?.name }
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default FavouritesList;
