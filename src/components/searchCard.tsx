import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../assets/constants";

export default function SearchCard(props: any) {
  const navigate = useNavigate();

  const { category, cloudinaryId, text, metadata } = props.each;

  const dataObject = JSON.parse(metadata);
  const restaurantId = dataObject?.data?.primaryRestaurantId || 0;


  return (
    <>
      <div
        onClick={() => navigate(`/restaurant/${restaurantId}`)}
        className="w-2/3 border flex rounded-sm items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
        key={cloudinaryId}
      >
        <img
          className="w-32 h-28 rounded-md"
          src={IMG_URL + cloudinaryId}
          alt="image"
        />
        <div className="">
          <h1 className=" font-semibold">{text}</h1>
          <h3 className=" text-gray-600">{category}</h3>
        </div>
      </div>
    </>
  );
}
