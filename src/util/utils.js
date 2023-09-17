export const truncateString = (str, length = 20) => {
    if(str && str.length > length){
        return str?.slice(0, length) + "..."
    }
    return str;
}
