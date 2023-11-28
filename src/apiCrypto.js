import axios from "axios";

const Base_URL = "https://min-api.cryptocompare.com/data";

export async function fetchCryptoDetails() {
  const response = await axios.get(`${Base_URL}/top/totalvolfull`, {
    params: {
      limit: 100,
      tsym: "INR",
    },
  });
  return response.data.Data;
}
export async function fetchCoinDetails(symbol) {
  console.log(symbol, "api");
  const response = await axios.get(
    `https://data-api.cryptocompare.com/asset/v1/data/by/symbol`,
    {
      params: {
        asset_symbol: symbol,
      },
    }
  );
  return response.data.Data;
}

export const fetchPriceData = async ({ crypto }) => {
  try {
    const response = await axios.get(`${Base_URL}/v2/histoday`, {
      params: {
        fsym: crypto,
        tsym: "INR",
        limit: 30,
      },
    });

    return response.data.Data.Data;
  } catch (error) {
    throw new Error(`Error fetching price data: ${error.message}`);
  }
};
