import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function InDecButton(props) {
  let { restaurantName, name, price, quantity } = props;
  if (quantity > 1) {
    price = price / quantity;
  }

  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addToCart([restaurantName, name, price]));
  }

  function handleRemove() {
    dispatch(removeFromCart([restaurantName, name, price]));
  }
  return (
    <div className="flex  justify-between items-center gap-2 border shadow-sm  h-fit rounded-md text-green-500 font-bold bg-white ">
      <button
        onClick={() => handleRemove()}
        className=" text-xl px-1  h-fit  hover:bg-gray-200"
      >
        -
      </button>
      <h1>{quantity}</h1>
      <button
        onClick={() => handleAdd()}
        className=" text-xl px-1 h-fit hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
}
