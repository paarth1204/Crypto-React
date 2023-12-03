import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCurrency } from "../CryptoContext";

/* eslint-disable react/prop-types */
function CryptoItem({ crypto }) {
  const { currency, symbol } = useCurrency();

  let price;
  let change;

  if (crypto.RAW) {
    if (currency === "INR") {
      price = crypto.DISPLAY.INR.PRICE;
      change = crypto.DISPLAY.INR.CHANGEPCT24HOUR;
    } else if (currency === "USD") {
      price = crypto.DISPLAY.USD.PRICE;
      change = crypto.DISPLAY.USD.CHANGEPCT24HOUR;
    } else if (currency === "EUR") {
      price = crypto.DISPLAY.EUR.PRICE;
      change = crypto.DISPLAY.EUR.CHANGEPCT24HOUR;
    }
  } else {
    if (currency === "INR") {
      change = 0;
    } else if (currency === "USD") {
      change = 0;
    } else if (currency === "EUR") {
      change = 0;
    }
  }

  return (
    <Container>
      <Link
        to={`/${crypto.CoinInfo.Name}`}
        className="flex gap-4 py-3.5 border-b  crypto-item border-stone-300  md:w-[800px]"
      >
        <img
          src={`https://www.cryptocompare.com${crypto.CoinInfo.ImageUrl}`}
          alt={crypto.CoinInfo.FullName}
          className=" h-11 object-cover rounded-full mr-4 brightness-[1]"
          // style={{}}
        />
        <Typography
          variant="h6"
          style={{
            alignItems: "center",
            marginTop: "8px",
            justifyContent: "center",
          }}
        >
          {crypto.CoinInfo.FullName}
        </Typography>
        <Typography variant="h6" color={change >= 0 ? "green" : "red"}>
          {(change >= 0 ? "⬆" : "⬇") + (change + " %")}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            marginTop: "8px",
            marginLeft: "auto",
            marginRight: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            textAlign: "right",
          }}
        >
          {crypto.RAW ? price : symbol + " " + 0}
        </Typography>
      </Link>
    </Container>
  );
}

export default CryptoItem;
