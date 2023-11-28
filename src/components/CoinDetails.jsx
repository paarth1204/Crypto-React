import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../apiCrypto";

/* eslint-disable react/prop-types */
function CoinDetails({ symbol }) {
  console.log(symbol, "sy");
  const { data } = useQuery({
    queryKey: ["coinDetail", symbol],
    queryFn: () => fetchCoinDetails({ symbol }),
  });

  return (
    <div className="flex ">
      <img src={data.LOGO_URL} alt={data.ASSET_TYPE} />
      <p>{data.ASSET_DESCRIPTION_SNIPPET}</p>
    </div>
  );
}

export default CoinDetails;
