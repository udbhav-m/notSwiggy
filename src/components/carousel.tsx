import { useState } from "react";
import { ArrowLeft, ArrowRight } from "../assets/svg";
import OffersCard from "./offerCard";
import { IMG_URL } from "../assets/constants";
import { PopCuisinesCardBig } from "./popCuisinesCard";

export default function Carousel(props: any) {
  const { cards, heading, type } = props;
  const [currentIndex, setCurrentIndex] = useState(1);

  const [len, setLen] = useState(0);

  const handleRight = () => {
    if (cards?.length < 7) {
      setLen(cards.length - 1);
    }
    if (cards?.length >= 7 && cards?.length <= 11) {
      setLen(cards.length - 3);
    } else {
      setLen(cards.length - 4);
    }

    setCurrentIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
  };

  const handleleft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="flex justify-between">
        <h1 className="p-5 font-bold text-2xl">{heading}</h1>
        <div className=" p-4 flex gap-2 ">
          <button
            onClick={() => (currentIndex != 0 ? handleleft() : "")}
            className={`  rounded-full ${
              currentIndex == 0 ? "bg-transparent" : "bg-gray-200"
            }`}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() =>
              currentIndex != cards.length - 2 ? handleRight() : ""
            }
            className={`  rounded-full ${
              currentIndex == cards?.length - 2
                ? "bg-transparent"
                : "bg-gray-200"
            }`}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden gap-2 ">
        {cards?.map((each: any, index: number) => (
          <span
            key={index}
            className={`transition-all duration-300`}
            style={{ translate: `${-100 * currentIndex}%` }}
          >
            {type == "offer" ? (
              <OffersCard offers={each} />
            ) : type == "top" ? (
              <TopPicksCards topPicks={each} />
            ) : (
              <PopCuisinesCardBig each={each} />
            )}
          </span>
        ))}
      </div>
    </>
  );
}

function TopPicksCards(props: any) {
  const { creativeId, dish } = props.topPicks;
  return (
    <>
      <div className="flex size-56">
        <img src={IMG_URL + creativeId} alt="topPickItem" />
        <h1 className="absolute bottom-2 left-3 text-white">{`₹${
          dish.info.price / 100 || dish.info.defaultPrice / 100
        }`}</h1>
      </div>
    </>
  );
}
