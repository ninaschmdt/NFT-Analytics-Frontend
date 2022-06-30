import axios from "axios";

export const CollectionImage = ` {
    contract(address: $address) {
        ... on ERC721Contract {
          unsafeOpenseaImageUrl
        }
      }
    }
}`
const fetchDataImage = async (query) => {
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

export default fetchDataImage