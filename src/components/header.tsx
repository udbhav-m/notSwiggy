import { useLocation, useNavigate } from "react-router-dom";
import SwiggyLogo, { SearchLogo, OfferLogo } from "../assets/svg";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <div className=" shadow-lg flex justify-between pt-3 pb-3 pl-36 pr-36 bg-white ">
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

          <div className="flex fill-slate-500 text-slate-500 hover:fill-swiggy hover:text-swiggy">
            {OfferLogo}
            <h1 className="font-semibold	 ">Offers</h1>
          </div>
        </div>
      </div>
    </>
  );
}
