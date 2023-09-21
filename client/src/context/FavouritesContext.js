import { createContext, useState } from 'react';

export const FavouriteContext = createContext();

const FavouriteContextProvider = (props) => {
    const [favourites, setFavourites] = useState({})
  
    return (
      <FavouriteContext.Provider 
          value={{favourites, setFavourites}}
              >
          {props.children}
      </FavouriteContext.Provider>
    )
  }
  
  export default FavouriteContextProvider;