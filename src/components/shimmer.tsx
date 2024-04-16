export default function Shimmer() {
  return (
    <>
      <div className=" h-[17rem] w-60 text-slate-300 animate-pulse">
        <div className=" flex flex-wrap gap-3">
          <div className=" h-40 w-full rounded-lg bg-slate-300" />
          <div className="flex flex-wrap gap-3">
            <h1 className=" bg-slate-300 rounded-lg">
              restaurant --- --- --- --- ---- name
            </h1>

            <div className="flex gap-4">
              <div className="flex gap-4 ">
                <div className=" bg-slate-300 rounded-lg">star</div>
                <h2 className="bg-slate-300 rounded-lg  ">vgRating</h2>
              </div>

              <h2 className="bg-slate-300 rounded-lg  ">deliveryTime</h2>
            </div>

            <h3 className="bg-slate-300 rounded-lg">cuisine</h3>
            <h3 className="bg-slate-300 rounded-lg">------ areaName ------</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export function ButtonShimmer(props: { loading: any }) {
  let loading = props.loading;
  return (
    <div
      className={`flex gap-4 pt-5 animate-pulse justify-center ${
        !loading ? "hidden" : ""
      }`}
    >
      <button className="border pl-5 pr-5 text-slate-300 bg-slate-300 shadow-sm rounded-full">
        Top rated
      </button>
      <button className="border pl-5 pr-5 bg-slate-300 shadow-sm rounded-full text-slate-300">
        Fast Delivery
      </button>
      <button className="pl-5 pr-5 bg-slate-300 shadow-sm rounded-full border text-slate-300">
        Clear Filters
      </button>
    </div>
  );
}

export function SearchCardShimmer() {
  let n = 5;
  let arr = [...Array(n)];
  return (
    <>
      {arr.map((each: number) => (
        <div
          key={each}
          className="w-2/3 border animate-pulse flex items-center gap-5 p-2 hover:bg-gray-100"
        >
          <div className="w-32 h-28 bg-slate-300 rounded-sm" />
          <div className="flex flex-col rounded gap-2">
            <div className=" bg-slate-300 text-slate-300 rounded">text</div>
            <div className=" bg-slate-300 text-slate-300 rounded">
              "category"
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function PopCuisinesShimmer() {
  let n = 12;
  let arr = [...Array(n)];
  return (
    <>
      <div className="flex animate-pulse gap-3">
        {arr.map((each: number) => (
          <div key={each} className="w-14 h-14 rounded-full  bg-slate-300" />
        ))}
      </div>
    </>
  );
}

export function MenuShimmer() {
  return (
    <>
      <div className=" flex justify-center pt-20 animate-pulse 0 text-transparent gap-10">
        <div className="flex flex-col gap-7 rounded-2xl p-5 w-7/12 bg-slate-100 ">
          <h1 className="font-bold text-2xl bg-slate-200 ">name</h1>

          <div className=" rounded-xl  p-5">
            <div className="flex gap-2 font-semibold bg-slate-200 ">
              <h1>avgRatingString</h1>
              <h1>totalRatingsString</h1>
              <h1>costForTwoMessage</h1>
            </div>

            <div className="flex flex-col gap-2 bg-slate-200 ">
              <h1 className="text-sm pt-2">cuisine</h1>
              <div className=" flex">
                <div className=" flex flex-col gap-1 text-sm">
                  <div className="flex gap-2">
                    <h1 className="font-semibold ">Outlet</h1>
                    <h1>locality</h1>
                  </div>

                  <h1 className="font-semibold ">sla.slaString</h1>
                </div>
              </div>
              <div className="flex gap-2  text-sm">
                <img className=" h-5" src={""} alt="" />
                <h1>{`sla.lastMileTravel kms | ₹
                feeDetails.amount / 100
              } Delivery fee will apply`}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function CarouselShimmer() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center text-transparent bg-slate-100 h-32 w-7/12">
        <h1 className="pt-16 font-bold text-2xl bg-slate-200 h-12 w-6/12 ">
          heading
        </h1>
        <div className=" p-4 flex gap-2  ">
          <button className={`bg-slate-200  rounded-full`}></button>
          <button className={` bg-slate-200 rounded-full `}></button>
        </div>
        <div className="flex overflow-hidden gap-3 bg-slate-200 h-16 w-6/12 "></div>
      </div>
    </div>
  );
}
