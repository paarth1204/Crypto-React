import axios from "axios";

const Base_URL = "https://min-api.cryptocompare.com/data";

export async function fetchCryptoDetails({ currency }) {
  try {
    const response = await axios.get(`${Base_URL}/top/totalvolfull`, {
      params: {
        limit: 100,
        tsym: currency,
      },
    });
    return response.data.Data;
  } catch (error) {
    throw new Error(`Error fetching crypto details: ${error.message}`);
  }
}

export const fetchPriceData = async ({ crypto, currency }) => {
  try {
    const response = await axios.get(`${Base_URL}/v2/histoday`, {
      params: {
        fsym: crypto,
        tsym: currency,
        limit: 30,
      },
    });

    return response.data.Data.Data;
  } catch (error) {
    throw new Error(`Error fetching price data: ${error.message}`);
  }
};
