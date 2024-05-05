const axios = require('axios');

/**
 * Posts a blog article to the dev.to API.
 *
 * @param {Object} article - The article object to be posted.
 * @param {string} ApiKey - The API key required to access the dev.to API.
 * @returns {Promise<Object>} - A promise that resolves to the response data from the API.
 */

async function postBlog(article, ApiKey ){
  const api = `Bearer ${ApiKey}`;
  const url = `https://api.medium.com/v1/users/${UserID}/posts`;
    try {
        const response = await axios.post(
          url,
          article,
          {
              headers: {
                  "Content-Type": "application/json",
                  Authorization: api,
              },
          }
        );
          return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { postBlog };