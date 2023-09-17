import { truncateString } from "../util/utils";
import Avatar from "./Avatar";

const SearchResult = ({ user }) => (
    <a 
        href={`https://torre.ai/${user?.username}`}
        className="flex h-[50px] content-center	 justify-between cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
            <div className="flex content-center my-auto">
                <Avatar 
                    imageUrl={user?.imageUrl} 
                    name={user?.name} 
                    verified={user?.verified} />
                <p class="flex-grow font-medium px-2 align-middle my-auto">{user?.name}</p>
            </div>
            <div class="text-sm text-right font-normal text-gray-500 tracking-wide max-w-[50%] my-auto">
                { truncateString(user?.professionalHeadline, 20) }
            </div>
    </a>
)

export default SearchResult;