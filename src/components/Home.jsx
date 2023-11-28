import { useQuery } from "@tanstack/react-query";
import CryptoItem from "./CryptoItem";
import Loader from "./Loader";
import { fetchCryptoDetails } from "../apiCrypto";

function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["cryptoList"],
    queryFn: fetchCryptoDetails,
  });

  if (isLoading) return <Loader />;

  if (error) return <p>Error...</p>;

  return (
    <div className="bg-sky-950 divide-y divide-stone-200 px-2 ">
      <ul>
        {data.map((crypto) => (
          <li key={crypto.CoinInfo.Id}>
            <CryptoItem crypto={crypto} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
