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

function CryptoDetail() {
  const { crypto } = useParams();

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
    <div className="bg-sky-950 h-screen flex flex-col">
      <h1 className="flex items-center justify-center text-3xl font-bold text-blue-50 mt-5">
        Crypto Price Chart
      </h1>

      <ResponsiveContainer width="65%" height="65%">
        <LineChart
          width={600}
          height={400}
          data={chartData}
          className=" flex m-auto right-[0] bottom-[0] left-[0] mt-20 px-4 items-center justify-center ml-20 bg-gray-950"
        >
          <XAxis dataKey="date" stroke="rgb(231, 217, 16)" />
          <YAxis stroke="rgb(231, 217, 16)" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="rgb(75, 192, 192)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  // return null;
}

export default CryptoDetail;
