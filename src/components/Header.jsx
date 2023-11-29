import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-600 crypto-header px-7 py-6 uppercase sm:px-6 ">
      <Link
        to="/"
        className="tracking-widest text-stone-300 text-lg font-semibold"
      >
        Coins React
      </Link>

      {/* <input
        type="text"
        placeholder="Enter Coin"
        className="px-4 py-3 rounded-full transition-all duration-300 bg-stone-200 focus:border-sky-100 sm:w-64 sm:focus:w-72"
      /> */}
    </header>
  );
}

export default Header;
