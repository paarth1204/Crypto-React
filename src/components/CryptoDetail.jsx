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
import { useCurrency } from "../CryptoContext";
import numeral from "numeral";

function CryptoDetail() {
  const { crypto } = useParams();
  const { currency, symbol } = useCurrency();

  const { data, error, isLoading } = useQuery({
    queryKey: ["cryptoDetail", crypto],
    queryFn: () => fetchPriceData({ crypto, currency }),
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
    open: entry.open,
    high: entry.high,
    close: entry.close,
  }));

  function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{`Date: ${label}`}</p>
          <p>{`Open: ${symbol}${dataPoint.open}`}</p>
          <p>{`High: ${symbol}${dataPoint.high}`}</p>
          <p>{`Price: ${symbol}${dataPoint.price}`}</p>
        </div>
      );
    }

    return null;
  }

  const formatCurrencyAxis = (value) => {
    return numeral(value).format(`${symbol}0,0.00`);
  };

  return (
    <div className=" h-screen flex flex-col">
      <h1 className="flex items-center justify-center text-3xl font-bold text-[rgb(21, 27, 1))] mt-5">
        {crypto}
      </h1>

      <ResponsiveContainer width="90%" height="85%">
        <LineChart
          width={800}
          height={500}
          data={chartData}
          className=" flex m-auto right-[0] bottom-[0] left-[0] mt-17 px-5  items-center justify-center ml-20 bg-gray-950"
        >
          <XAxis
            dataKey="date"
            stroke="rgb(231, 217, 16)"
            angle={-10}
            textAnchor="end"
          />
          <YAxis
            stroke="rgb(231, 217, 16)"
            tickFormatter={formatCurrencyAxis}
            angle={-40}
            textAnchor="end"
            // tick={{ fontSize: 10 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="price" stroke="rgb(75, 192, 192)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CryptoDetail;
