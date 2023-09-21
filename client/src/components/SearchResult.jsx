import { useContext } from "react";
import { FavouriteContext } from "../context/FavouritesContext";
import FavouriteIcon from "../Icons/FavouriteIcon";
import { truncateString } from "../util/utils";
import Avatar from "./Avatar";

const GNOME_BASE_URL =  process.env.REACT_APP_GNOME_BASE_URL

const SearchResult = ({ user }) => {
    const { favourites, setFavourites } = useContext(FavouriteContext)

    const addFavourite = () => {
        const { ardaId } = user

        if(favourites[ardaId]){
            alert(`Removed ${user?.name} to favourites`)
            setFavourites((prev) => ({...prev, [ardaId]: undefined }))
        }else{
            alert(`Added ${user?.name} to favourites`)
            setFavourites((prev) => ({...prev, [ardaId]: user }))
        }
    }

    return (
        <div
            className="flex h-[50px] content-center	 justify-between cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
            <div className="flex content-center my-auto">
                <div className="my-auto pr-3">
                    <FavouriteIcon color={favourites[user?.ardaId] ? "#FFD700" : "black"}  onClick={() => addFavourite() } />
                </div>
                <Avatar 
                    imageUrl={user?.imageUrl} 
                    name={user?.name} 
                    verified={user?.verified} />
                <p 
                    onClick={() => window.open(`${GNOME_BASE_URL + user?.username}`, '_blank')} 
                    className="flex-grow font-medium px-2 align-middle my-auto"
                    >
                    {user?.name}
                </p>
            </div>
            <div
                onClick={() => window.location.assign(`${GNOME_BASE_URL + user?.username}`, '_blank')} 
                className="text-sm text-right font-normal text-gray-500 tracking-wide max-w-[50%] my-auto">
                { truncateString(user?.professionalHeadline, 25) }
            </div>
        </div>
    )
}

export default SearchResult;