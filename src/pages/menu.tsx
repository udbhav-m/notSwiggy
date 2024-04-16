import { useNavigate, useParams } from "react-router-dom";
import { MENU_URL } from "../assets/constants";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/restaurantCard";
import Carousel from "../components/carousel";
import MenuCard from "../components/menuCard";
import { CarouselShimmer, MenuShimmer } from "../components/shimmer";

export default function MenuPage() {
  const { id } = useParams();
  const [restaurantDetails, setDetails]: any = useState({});
  const [offers, setOffers]: any[] = useState([]);
  const [topPicks, setTopPicks]: any = useState({});
  const [menu, setMenu]: any = useState([]);
  const navigate = useNavigate();

  async function fetchMenu() {
    const api = await fetch(MENU_URL + id);
    const apiData = await api.json();
    setDetails(apiData.data.cards[2].card.card.info);
    setOffers(
      apiData.data.cards[3].card.card.gridElements.infoWithStyle.offers
    );
    let tempMenu =
      apiData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
      apiData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    tempMenu = tempMenu.slice(2, -2);

    // setMenu(tempMenu.length > 8 ? tempMenu.slice(2, 7) : tempMenu.slice(2, 6));
    setMenu(tempMenu);
    setTopPicks(
      apiData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.title == "Top Picks"
        ? apiData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card
        : apiData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.title == "Top Picks"
        ? apiData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card
        : ""
    );
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <>
      {restaurantDetails.name ? (
        <div>
          <div className="absolute top-28 left-72 flex gap-1 text-xs text-gray-400 font-semibold ">
            <h1
              onClick={() => navigate("/home")}
              className="hover:text-gray-700 cursor-pointer"
            >
              {"Home / "}
            </h1>
            <h1 className="text-gray-700">{restaurantDetails.name}</h1>
          </div>
          <RestaurantCard restaurantDetails={restaurantDetails} />
          <div className={offers ? "visible" : "hidden"}>
            <div className="flex justify-center">
              <div className="w-7/12 pt-10">
                <Carousel
                  heading={"Deals for you"}
                  cards={offers}
                  type={"offer"}
                />
              </div>
            </div>
          </div>
          <div className="  text-center pt-16 w-full h-full space-y-6">
            <h1 className=" font-mono text-gray-700">~ M E N U ~</h1>
            <hr className=" relative top-1/2 translate-x-72 border-solid border-gray-200 w-7/12" />
          </div>

          <div className={`space-y-12 `}>
            <div
              className={`flex justify-center ${
                topPicks ? "visible" : "hidden"
              }`}
            >
              <div className="w-7/12 pt-5 ">
                <Carousel
                  heading={topPicks.title}
                  cards={topPicks.carousel}
                  type={"top"}
                />
              </div>
            </div>
            <div className="flex justify-center   ">
              <div className="w-7/12 space-y-4 divide-y-8">
                {menu.map((each: any, index: number) => (
                  <MenuCard menu={each} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" space-y-8">
          <MenuShimmer />
          <CarouselShimmer />
        </div>
      )}
    </>
  );
}
