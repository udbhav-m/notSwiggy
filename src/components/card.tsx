import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../assets/constants";
import { star } from "../assets/svg";

export default function Card(props: any) {
  const navigate = useNavigate();
  let { details } = props;
  let { name, areaName, avgRating, cuisines, sla, cloudinaryImageId, id } =
    details.info;
  let deliveryTime = sla.slaString;
  let cuisine = cuisines.join(", ");

  return (
    <>
      <div
        onClick={() => navigate(`/restaurant/${id}`)}
        className="hover:scale-90 h-[17rem] w-60  transition-all cursor-pointer"
      >
        <div className=" ">
          <img
            className=" h-40 w-full rounded-lg"
            src={IMG_URL + cloudinaryImageId}
            alt="__restaurantImage"
          />
          <div>
            <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold text-gray-800">
              {name}
            </h1>

            <div className="flex gap-4 font-semibold text-gray-800">
              <div className="flex gap-2 ">
                {star}
                <h2>{avgRating}</h2>
              </div>

              <h2>{deliveryTime}</h2>
            </div>

            <h3 className="overflow-hidden whitespace-nowrap overflow-ellipsis text-gray-500">
              {cuisine}
            </h3>
            <h3 className="text-gray-500">{areaName}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
