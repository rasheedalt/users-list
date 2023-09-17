export const truncateString = (str, length = 20) => str ? str?.slice(0, length) + "..." : "";
