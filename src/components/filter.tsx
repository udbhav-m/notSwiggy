export default function FilterButtons(props: { fun: [any, any, any, any] }) {
  const active: string = "bg-slate-100";
  let [handleClear, handleFilter, filters, loading] = props.fun;

  return (
    <>
      <div
        className={`flex gap-4 pt-5 justify-center  text-gray-600 ${
          loading ? "hidden" : "visible"
        }`}
      >
        <button
          onClick={() => {
            handleFilter("avgRating");
          }}
          className={`border pl-5 pr-5 border-gray-400 shadow-lg rounded-full ${
            filters.includes("avgRating") ? active : ""
          }`}
        >
          Top rated
        </button>
        <button
          onClick={() => handleFilter("deliveryTime")}
          className={`border pl-5 pr-5 border-gray-400 shadow-lg rounded-full ${
            filters.includes("deliveryTime") ? active : ""
          }`}
        >
          Fast Delivery
        </button>
        <button className="pl-5 pr-5" onClick={handleClear}>
          Clear Filters
        </button>
      </div>
    </>
  );
}
