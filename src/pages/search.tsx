import { useEffect, useState } from "react";
import { PRE_SEARCH, SEARCH_URL } from "../assets/constants";
import SearchBar from "../components/searchBar";
import SearchCard from "../components/searchCard";
import PopCuisinesCard from "../components/popCuisinesCard";
import { PopCuisinesShimmer, SearchCardShimmer } from "../components/shimmer";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [searchItems, setItems] = useState([]);
  const [PopCuisines, setCuisines] = useState([]);
  const [popLoading, setPopLoading] = useState(false);

  async function fetchSearch() {
    const api = await fetch(SEARCH_URL + query);
    const jsonData = await api.json();
    setItems(jsonData.data?.suggestions || []);
  }

  async function fetchPreSearch() {
    setPopLoading(true);
    const preApi = await fetch(PRE_SEARCH);
    const preData = await preApi.json();
    setCuisines(
      preData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info ||
        []
    );
    setPopLoading(false);
  }

  useEffect(() => {
    fetchPreSearch();
  }, []);

  useEffect(() => {
    fetchSearch();
  }, [query]);

  return (
    <>
      <div className="flex justify-center p-10 ">
        <SearchBar search={query} setSearch={setQuery} />
      </div>

      <div
        className={` flex flex-wrap justify-center gap-4 ${
          query ? "h-full" : "h-screen"
        }`}
      >
        {searchItems.length > 0 && query ? (
          searchItems.map((each: any) => <SearchCard each={each} />)
        ) : !query ? (
          <div className="w-[63%] p-2">
            <div>
              <h1 className="font-bold text-xl text-gray-700">
                Popular cuisines
              </h1>
            </div>
            <div className={` flex pt-4 ${popLoading ? "visible" : "hidden"}`}>
              <PopCuisinesShimmer />
            </div>
            <div className={`flex ${popLoading ? "hidden" : ""}`}>
              {PopCuisines.map((each: any) => (
                <PopCuisinesCard
                  key={each.imageId}
                  each={each}
                  setQuery={setQuery}
                />
              ))}
            </div>
          </div>
        ) : (
          <SearchCardShimmer />
        )}
      </div>
    </>
  );
}
