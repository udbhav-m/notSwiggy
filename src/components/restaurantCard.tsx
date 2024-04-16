import { bikeImage } from "../assets/constants";
import { star, FromTo } from "../assets/svg";

export default function RestaurantCard(props: any) {
  let {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
    feeDetails,
  } = props.restaurantDetails;
  return (
    <div className=" flex justify-center pt-20">
      <div className="flex flex-col gap-7 rounded-2xl p-5 w-7/12 bg-gradient-to-t from-slate-200 to-transparent">
        <h1 className="font-bold text-2xl">{name}</h1>

        <div className="bg-white rounded-xl border p-5">
          <div className="flex gap-2 font-semibold">
            {star}
            <h1>{avgRatingString}</h1>
            <h1>{`(${totalRatingsString})`}</h1>
            <h1>{costForTwoMessage}</h1>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-sm pt-2">{cuisines.join(", ")}</h1>
            <div className="text-gray-500 flex">
              <FromTo />
              <div className=" flex flex-col gap-1 text-sm">
                <div className="flex gap-2">
                  <h1 className="font-semibold text-black">Outlet</h1>
                  <h1>{locality}</h1>
                </div>

                <h1 className="font-semibold text-black">{sla.slaString}</h1>
              </div>
            </div>
            <div className="flex gap-2 text-gray-500 text-sm">
              <img className=" h-5" src={bikeImage} alt="" />
              <h1>{`${sla.lastMileTravel} kms | ₹${
                feeDetails.amount / 100
              } Delivery fee will apply`}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
