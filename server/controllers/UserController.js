import axios from 'axios';
import { config } from "dotenv";
config();

const searchUsers = async (req, res) => {
    try {
        const { limit = 50, search_word  } = req.query;
        const api_url = process.env.TORRE_API_BASE_URL;

        const response = await axios.post(api_url, {
            query: search_word,
            limit
        })

        return res.successResponse(response?.data, "successful")
    } catch (err) {
      return res.errResponse(500, err.message);
    }
};

export {
    searchUsers
};