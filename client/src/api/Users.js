import axios from "axios"

export const searchUsersApi = async (params) => (
    axios.get('/users/search', { params })
)
