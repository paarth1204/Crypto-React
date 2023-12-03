import { useQuery } from "@tanstack/react-query";
import CryptoItem from "./CryptoItem";
import Loader from "./Loader";
import { fetchCryptoDetails } from "../apiCrypto";
import { Box, MenuItem, Select } from "@mui/material";
import { useCurrency } from "../CryptoContext";

function Home() {
  const { currency, setCurrency } = useCurrency();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["cryptoList", currency],
    queryFn: () => fetchCryptoDetails({ currency }),
  });

  if (isLoading) return <Loader />;

  if (error) return <p>Error...</p>;

  // console.log(data);
  return (
    <Box>
      <Select
        sx={{
          width: 100,
          height: 40,
          position: "absolute",
          top: 0,
          right: 20,
          bgcolor: " rgb(125, 158, 5)",
        }}
        value={currency}
        label="Currency"
        onChange={(e) => {
          const newCurrency = e.target.value;
          setCurrency(newCurrency);
          refetch({ queryKey: ["cryptoList", newCurrency] });
        }}
      >
        <MenuItem value={"INR"}>INR</MenuItem>
        <MenuItem value={"USD"}>USD</MenuItem>
        <MenuItem value={"EUR"}>EUR</MenuItem>
      </Select>

      <ul>
        {data.map((crypto) => (
          <li key={crypto.CoinInfo.Id}>
            <CryptoItem crypto={crypto} />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Home;
