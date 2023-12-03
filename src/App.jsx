import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CryptoDetail from "./components/CryptoDetail";
// import { makeStyles } from "@mui/styles";

const queryClient = new QueryClient();

function App() {
  //   const useStyles = makeStyles(() => ({
  //     App: {},
  //   }));

  // const classes = useStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="crypto-main">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/:crypto" element={<CryptoDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default App;
