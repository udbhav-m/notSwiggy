import { useLocation, useNavigate } from "react-router-dom";
import SwiggyLogo, { SearchLogo, OfferLogo } from "../assets/svg";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const size = useSelector((store) => store.cart.size);

  return (
    <>
      <div
        className={`w-full shadow-lg flex justify-between pt-3 pb-3 pl-36 pr-36 bg-white fixed z-50`}
      >
        <SwiggyLogo />
        <div className=" flex gap-4 pt-3">
          <div
            onClick={() => {
              navigate("/search");
            }}
            className={`flex gap fill-slate-500 hover:fill-swiggy text-slate-500 hover:text-swiggy ${
              pathname == "/search" ? "fill-swiggy text-swiggy" : ""
            }`}
          >
            <SearchLogo />
            <h1 className="font-semibold	">Search</h1>
          </div>

          <div
            onClick={() => navigate("/cart")}
            className={`flex fill-slate-500 space-x-2 text-slate-500 hover:fill-swiggy hover:text-swiggy `}
          >
            <Cart />
            <h1 className="font-semibold ">Cart</h1>
          </div>
        </div>
      </div>
    </>
  );
}

const Cart = () => {
  const size = useSelector((store) => store.cart.size);

  return (
    <span className={` ${size ? "fill-green-500" : ""}`}>
      <svg className="_1GTCc _2MSid" viewBox="0 0 37 32" height="20" width="22">
        <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
      </svg>
      <span className="text-sm font-semibold absolute top-6 right-42 pl-1.5 text-white">
        {size}
      </span>
    </span>
  );
};
