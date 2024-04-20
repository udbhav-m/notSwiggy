import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function AddButton(props) {
  const { restaurantName, each, count } = props;

  const dispatch = useDispatch();

  function handleAdd() {
    console.log(each);
    const { name, price, defaultPrice } = each?.card?.info;
    dispatch(addToCart([restaurantName, name, price || defaultPrice]));
  }

  function handleRemove() {
    console.log(each);
    const { name, price, defaultPrice } = each?.card?.info;
    dispatch(removeFromCart([restaurantName, name, price || defaultPrice]));
  }

  return !count ? (
    <button
      onClick={() => handleAdd()}
      className=" border shadow-sm absolute my-36 w-28 py-2 rounded-md text-green-500 font-bold bg-white hover:bg-gray-200"
    >
      ADD
    </button>
  ) : (
    <div className="flex  justify-between items-center gap-2 border shadow-sm absolute my-36 w-28 rounded-md text-green-500 font-bold bg-white ">
      <button
        onClick={() => handleRemove()}
        className=" text-xl px-4 py-1.5 h-full  hover:bg-gray-200"
      >
        -
      </button>
      <h1 className="">{count}</h1>
      <button
        onClick={() => handleAdd()}
        className=" text-xl px-4 py-1.5 hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
}

