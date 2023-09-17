const SearchResult = ({ name, role, isActive = true }) => (
    <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
        <span className={`bg-${isActive ? "green" : "gray" }-400 h-2 w-2 m-2 rounded-full`}></span>
        <div class="flex-grow font-medium px-2">{name}</div>
        <div class="text-sm font-normal text-gray-500 tracking-wide">{role}</div>
    </div>
)

export default SearchResult;