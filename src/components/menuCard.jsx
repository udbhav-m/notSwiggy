import { useState } from "react";
import { IMG_URL } from "../assets/constants";
import { Up, star } from "../assets/svg";
import { useSelector } from "react-redux";

import AddButton from "./addButton";

export default function MenuCard(props) {
  const { title, categories, itemCards } = props?.menu?.card?.card;
  const restaurantName = props.restaurantName;
  let items = categories || itemCards;
  const [rotate, setRotate] = useState(false);

  const handleIcon = () => {
    if (rotate == false) {
      setRotate(true);
    } else {
      setRotate(false);
    }
  };

  const selector = useSelector;
  let itemsInCart = selector((store) => store.cart.items);

  console.log(itemsInCart);

  return (
    <>
      <div className="pt-6  ">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">
            {title} ({items.length})
          </h1>
          <button
            onClick={handleIcon}
            className={`transition-all ${rotate ? "rotate-180" : ""}`}
          >
            <Up />
          </button>
        </div>
        <div
          className={`space-y-2 text-gray-600 pb-10  ${rotate ? "hidden" : ""}`}
        >
          {items?.map((each, index) =>
            each.card ? (
              <div key={index} className="flex  w-full justify-between p-2 ">
                <div className="space-y-2 w-8/12">
                  <h1 className="font-bold text-lg pt-3">
                    {each?.card?.info?.name}
                  </h1>
                  <h1 className="font-bold text-md">
                    ₹
                    {each?.card?.info?.price / 100 ||
                      each?.card?.info?.defaultPrice / 100}
                  </h1>
                  <div className="flex gap-2">
                    {star}
                    <h1 className=" text-green-500 font-semibold">
                      {each.card.info.ratings.aggregatedRating.rating
                        ? each.card.info.ratings.aggregatedRating.rating
                        : "No ratings yet"}
                    </h1>
                    <h1>
                      {each.card.info.ratings.aggregatedRating.ratingCountV2
                        ? "(" +
                          each.card.info.ratings.aggregatedRating
                            .ratingCountV2 +
                          " ratings)"
                        : ""}
                    </h1>
                  </div>
                  <h1 className="line-clamp-2 text-sm">
                    {each?.card?.info?.description}
                  </h1>
                </div>
                <div className="flex justify-center size-44 p-2">
                  <img
                    className="rounded-2xl"
                    src={`${IMG_URL + each?.card?.info?.imageId}`}
                    alt="itemImage"
                  />
                  <AddButton
                    restaurantName={restaurantName}
                    each={each}
                    count={
                      itemsInCart[restaurantName]?.[each.card.info.name]
                        ?.quantity
                    }
                  />
                </div>
              </div>
            ) : each.itemCards ? (
              each.itemCards.map((each, idx) => (
                <div key={idx} className="flex w-full justify-between p-2 ">
                  <div className="space-y-2 w-8/12">
                    <h1 className="font-bold text-lg pt-3">
                      {each?.card?.info?.name}
                    </h1>
                    <h1 className="font-bold text-md">
                      ₹
                      {each?.card?.info?.price / 100 ||
                        each?.card?.info?.defaultPrice / 100}
                    </h1>
                    <div className="flex gap-2">
                      {star}
                      <h1 className=" text-green-500 font-semibold">
                        {each.card.info.ratings.aggregatedRating.rating
                          ? each.card.info.ratings.aggregatedRating.rating
                          : "No ratings yet"}
                      </h1>
                      <h1>
                        {each.card.info.ratings.aggregatedRating.ratingCountV2
                          ? "(" +
                            each.card.info.ratings.aggregatedRating
                              .ratingCountV2 +
                            " ratings)"
                          : ""}
                      </h1>
                    </div>
                    <h1 className="line-clamp-2 text-sm">
                      {each?.card?.info?.description}
                    </h1>
                  </div>
                  <div className="flex justify-center size-44 p-2">
                    <img
                      className="rounded-2xl"
                      src={`${IMG_URL + each?.card?.info?.imageId}`}
                      alt="itemImage"
                    />
                    <AddButton
                      restaurantName={restaurantName}
                      each={each}
                      count={
                        itemsInCart[restaurantName]?.[each.card.info.name]
                          ?.quantity
                      }
                    />
                  </div>
                </div>
              ))
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}
