/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Line } from "react-chartjs-2";

import { useParams } from "react-router-dom";

function CryptoDetail() {
  const { crypto } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["cryptoDetail", crypto],
    queryFn: () => fetchPriceData(crypto),
  });

  const fetchPriceData = async (crypto) => {
    try {
      const response = await axios.get(
        `https://min-api.cryptocompare.com/data/v2/histoday`,
        {
          params: {
            fsym: crypto,
            tsym: "INR",
            limit: 7,
          },
        }
      );

      return response.data.Data.Data;
    } catch (error) {
      throw new Error(`Error fetching price data: ${error.message}`);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="bg-sky-950 h-screen">
      <h1>Crypto Price Chart</h1>
      <Line
        data={{
          labels: data.map((entry) =>
            new Date(entry.time * 1000).toLocaleDateString()
          ),
          datasets: [
            {
              data: data.map((entry) => entry.close),
              label: "PRICE (INR)",
              borderColor: "#8d1141",
            },
          ],
        }}
      />
      <p>
        {data.map((entry) => new Date(entry.time * 1000).toLocaleDateString())}
      </p>
    </div>
  );
}

export default CryptoDetail;
