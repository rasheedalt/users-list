import { useContext, useEffect, useState } from "react";
import SearchIcon from "../Icons/SearchIcon";
import Input from "./form/Input";
import SearchResult from "./SearchResult";
import axios from "axios";
import { HistoryContext } from "../context/HistoryContext";

const search_url = "https://arda.torre.co/entities/_search";

const Search = () => {
    const [searchWord, setSearchWord] = useState("")
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const { setHistory } = useContext(HistoryContext)

    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            searchUser(searchWord)
        }, 1500)

        return () => clearTimeout(debounceSearch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchWord])

    const searchUser = async(search_word) => {
        try {
            if(!search_word){
                setUsers([])
                return;
            }
            setLoading(true)
            const result = await axios.post(search_url, {
                query: search_word,
                limit: 50
            })
            setUsers(result?.data?.results)
            setHistory((prev) => ([search_word, ...prev]).slice(0, 9))
            setLoading(false)
        } catch (error) {
            alert("Ann error occured")
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
            <div className="block text-gray-700 text-lg font-semibold py-2 px-2 text-center">
                Users List
            </div>
            <div className="flex items-center bg-gray-200 rounded-md">
                <div className="pl-2">
                    <SearchIcon />
                </div>
                <Input
                    className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                    id="search" 
                    type="text" 
                    placeholder="Search teams or members"
                    onChange={(e) => setSearchWord(e.target.value)}
                    />
            </div>
            <div className="py-3 text-sm max-h-[50vh] overflow-scroll">
                { loading && <p className="text-center">please wait ....</p>}
                { searchWord && !loading && users.length < 1 && <p className="text-center">No result for search found</p>}
                {
                    users.map((user) => <SearchResult user={user} key={user?.ardaId} /> )
                }
            </div>
        </div>
    )
}

export default Search;