import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function CryptoItem({ crypto }) {
  return (
    <Link
      to={`/${crypto.CoinInfo.Name}`}
      className="flex gap-4 py-3.5 border-b crypto-item border-stone-300 hover:bg-sky-950  md:w-[800px]"
    >
      <img
        src={`https://www.cryptocompare.com${crypto.CoinInfo.ImageUrl}`}
        alt={crypto.CoinInfo.FullName}
        className=" h-11 object-cover rounded-full mr-4  brightness-[1]"
      />
      <h1 className="text-sky-50 text-xl font-bold items-center mt-2">
        {crypto.CoinInfo.FullName}
      </h1>
      <span className="text-blue-50 text-xl font-extrabold mt-2 ml-auto mr-2 flex flex-col items-end text-right">
        ₹ {crypto.RAW ? Math.round(crypto.RAW.INR.PRICE) : 0}
      </span>
    </Link>
  );
}

export default CryptoItem;
