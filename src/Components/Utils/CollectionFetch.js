import axios from "axios";

export const trendingCollections = ` {
    contracts(orderBy: SALES, orderDirection: DESC) {
        edges {
          node {
            address
            ... on ERC721Contract {
              name
              stats {
                totalSales
                average
                ceiling
                floor
                volume
              }
              symbol
              circulatingSupply
            }
            tokens {
              edges {
                node {
                  tokenId
                  images {
                    height
                    mimeType
                    url
                    width
                  }
                }
              }
            }
          }
        }
      }
    }`


const fetchData = async (query) => {
    try {
        const queryResult = await axios.post(process.env.REACT_APP_GRAPHQL_API, {
            query
        }, {
            headers: {
                "x-api-key": process.env.REACT_APP_X_API_KEY
            }
        });
        return { queryResult }
    } catch (error) {
        return { error }
    }
};

export default fetchData