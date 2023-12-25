/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CryptoContext = createContext();

function CryptoProvider({ children }) {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(
    function () {
      if (currency === "JPY") setSymbol("¥");
      else if (currency === "USD") setSymbol("$");
      else if (currency === "EUR") setSymbol("€");
    },
    [currency]
  );
  return (
    <CryptoContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CryptoContext.Provider>
  );
}

function useCurrency() {
  const context = useContext(CryptoContext);
  if (context === "undefined")
    throw new Error("PostContext was used outside the PostProvider");
  return context;
}

export { CryptoProvider, useCurrency };
