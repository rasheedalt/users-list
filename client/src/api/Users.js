import axios from "axios"

const searchUsers = async (params) => (
    axios.get('/users/search', { params })
)

export default { searchUsers }