import axios from "axios";
import { useState } from "react";
import Input from "../components/form/Input";
import SearchResult from "../components/SearchResult";
import SearchIcon from "../Icons/SearchIcon";

const search_url = "https://arda.torre.co/entities/_search";

const Search = () => {
    const [users, setUsers] = useState([])

    const searchUser = async(search_word) => {
        try {
            if(!search_word){
                setUsers([])
                return;
            }
            const result = await axios.post(search_url, {
                query: search_word,
                limit: 10
            })
            setUsers(result?.data?.results)
            console.log(result)
        } catch (error) {
            
        }
    }

    return (
        <div className="w-full max-w-screen-xl mx-auto px-6">
            <div className="flex justify-center p-4 px-3 py-10">
                <div className="w-full max-w-lg">
                    <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                        <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
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
                                onChange={(e) => searchUser(e.target.value)}
                                />
                        </div>
                        <div className="py-3 text-sm max-h-[50vh] overflow-scroll">
                            {
                                users.map((user) => <SearchResult user={user} /> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;