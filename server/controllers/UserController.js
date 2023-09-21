import axios from 'axios';

const searchUsers = async (req, res) => {
    try {
        const { page = 1, limit = 50, search_word  } = req.query;
        const api_url = process.env.TORRE_API_BASE_URL;

        const response = await axios.post(api_url, {
            query: search_word,
            limit,
            page
        })

        return res.successResponse(response, "successful")
    } catch (err) {
      return res.errResponse(500, err.message);
    }
};

export {
    searchUsers
  };