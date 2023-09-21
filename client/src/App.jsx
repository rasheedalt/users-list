import FavouriteContextProvider from "./context/FavouritesContext";
import HistoryContextProvider from "./context/HistoryContext";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <FavouriteContextProvider>
      <HistoryContextProvider>
        <SearchPage />
      </HistoryContextProvider>
    </FavouriteContextProvider>
  );
}

export default App;
