import Card from "../components/card";
import { useEffect, useState } from "react";
import Shimmer, { ButtonShimmer } from "../components/shimmer";
import FilterButtons from "../components/filter";
import { PRE_SEARCH, URL } from "../assets/constants";
import Carousel from "../components/carousel";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [unfiltered, setUnfiltered] = useState([]);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [mind, setMind] = useState([]);

  const len = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  async function handleAPI() {
    const data = await fetch(`${URL}`);
    let api = await data.json();
    let cards = api.data.cards;
    console.log(api);

    let final = [];
    if (cards.length == 10) {
      final =
        api.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    } else {
      final =
        api.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    }
    setRestaurants(final);
    setLoading(false);
    setUnfiltered(final);
    setTitle(
      api?.data?.cards[0]?.card?.card?.title ||
        api?.data?.cards[2]?.card?.card?.title
    );
    setMind(api?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
  }
  async function fetchPreSearch() {
    const preApi = await fetch(PRE_SEARCH);
    const preData = await preApi.json();
    setMind(
      preData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info ||
        []
    );
  }

  useEffect(() => {
    handleAPI();
    fetchPreSearch();
  }, []);

  function filterItems() {
    let filteredRestaurants = unfiltered.slice();
    filters.forEach((filter) => {
      switch (filter) {
        case "avgRating":
          filteredRestaurants = filteredRestaurants.filter(
            (restaurant) =>
              restaurant.info.avgRating > 4
          );
          break;
        case "deliveryTime":
          filteredRestaurants = filteredRestaurants.filter(
            (restaurant) =>
              restaurant.info.sla.deliveryTime < 36
          );
          break;
        default:
          break;
      }
    });
    setRestaurants(filteredRestaurants);
  }

  function handleFilter(filter) {
    if (filters.includes(filter)) {
      setFilters(filters.filter((each) => each !== filter));

      filterItems();
    } else {
      let temp = filters;
      temp.push(filter);
      setFilters(temp);

      filterItems();
    }
  }

  useEffect(() => filterItems(), [filters]);

  function handleClear() {
    setFilters([]);
  }

  return (
    <>
      <div className="pt-28">
        <div className="flex justify-center">
          <div className="w-10/12">
            {mind ? (
              <Carousel
                heading={"What's on your mind?"}
                cards={mind}
                type={"mind"}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-10/12">
            <div className=" pt-8">
              <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <FilterButtons
              fun={[handleClear, handleFilter, filters, loading]}
            />
            <ButtonShimmer loading={loading} />
            <div className=" flex flex-wrap justify-center space-x-3 pt-8 pb-5">
              {loading ? (
                len.map((each) => <Shimmer key={each} />)
              ) : restaurants.length > 1 ? (
                restaurants.map((each) => {
                  return (
                    <div key={each.info.id}>
                      <Card details={each} />
                    </div>
                  );
                })
              ) : (
                <h2 className=" pt-5 h-screen font-semibold text-slate-500">
                  No restaurants with the current filters :(
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
