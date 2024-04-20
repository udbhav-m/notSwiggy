import { useSelector } from "react-redux";
import InDecButton from "../components/inDecButton";
import { useState } from "react";

export default function Cart() {
  const itemsInCart = useSelector((store) => store.cart.items);
  const size = useSelector((store) => store.cart.size);
  const total = useSelector((store) => store.cart.total);

  return (
    <div className="pt-32 flex justify-center bg-gray-100 h-screen">
      <div className="border rounded-sm shadow-md w-6/12 py-5 bg-white h-fit space-y-4">
        {size ? (
          Object.entries(itemsInCart).map(([restaurant, items]) => (
            <div key={restaurant} className=" flex flex-col pl-5 space-y-4">
              <h1 className="pl-4 text-xl font-semibold">{restaurant}</h1>
              {Object.entries(items).map(([itemName, details]) => (
                <div
                  key={itemName}
                  className="pl-24 flex justify-between text-gray-600 font-medium"
                >
                  <h1 className="text-gray-600 font-medium">{itemName}</h1>
                  <div className="flex justify-around gap-8 pr-10">
                    <InDecButton
                      restaurantName={restaurant}
                      name={itemName}
                      quantity={details.quantity}
                      price={details.price}
                    />
                    <h1>₹{details.price / 100}</h1>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <h1 className="font-bold text-xl flex justify-center text-gray-800">
            No items in the cart :/
          </h1>
        )}
        {total ? (
          <div className=" space-y-3">
            <div className="flex justify-center">
              <hr className="w-10/12" />
            </div>
            <div className="flex justify-between px-10 text-green-600 font-medium">
              <h1>{"T O -" + " P A Y"} :</h1>
              <h1>₹{total / 100}</h1>
            </div>
            <div className="flex justify-center">
              <button className="text-white font-medium bg-green-500 px-2 py-1 rounded-sm hover:-hue-rotate-15">
                Pay now
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
