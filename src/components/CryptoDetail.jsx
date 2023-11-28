/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchPriceData } from "../apiCrypto";
import CoinDetails from "./CoinDetails";

function CryptoDetail() {
  const { crypto } = useParams();
  console.log(crypto);
  const { data, error, isLoading } = useQuery({
    queryKey: ["cryptoDetail", crypto],
    queryFn: () => fetchPriceData({ crypto }),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const chartData = data.map((entry) => ({
    date: new Date(entry.time * 1000).toLocaleDateString(),
    price: entry.close,
  }));

  return (
    <div className="bg-sky-950 h-screen flex">
      <div className="border-r flex border-purple-800 m-auto">
        <CoinDetails symbol={crypto} />
      </div>
      <>
        <h1 className="items-center m-auto flex md:flex-col ml-[100px]">
          Crypto Price Chart
        </h1>
        <ResponsiveContainer width="65%" height="65%">
          <LineChart
            width={600}
            height={400}
            data={chartData}
            className="items-center m-auto flex md:flex-col ml-[100px] bg-gray-950"
          >
            <XAxis dataKey="date" stroke="rgb(231, 217, 16)" />
            <YAxis stroke="rgb(231, 217, 16)" />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="rgb(75, 192, 192)" />
          </LineChart>
        </ResponsiveContainer>
      </>
    </div>
  );
}

export default CryptoDetail;
