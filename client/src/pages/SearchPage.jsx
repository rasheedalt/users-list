import FavouritesList from "../components/FavouritesList";
import HistoryList from "../components/HistoryList";
import Search from "../components/Search";


const SearchPage = () => {

    return (
        <div className="w-full max-w-screen-xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center p-4 px-3 py-10 gap-10">
                <div className="min-w-[300px] md-w-full bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <FavouritesList />
                </div>

                <div className="w-full max-w-lg">
                   <Search />
                </div>

                <div className="min-w-[300px] md-w-full bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <HistoryList />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;