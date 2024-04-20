import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../assets/constants";

export default function PopCuisinesCard(props) {
  const { action, imageId } = props.each;
  const { setQuery } = props;
  let items = action.link.split("=");
  let item = items[items.length - 1];
  let query = decodeURIComponent(item);
  return (
    <>
      <div onClick={() => setQuery(query)} className="flex ">
        <img
          className="w-20 h-auto cursor-pointer"
          src={IMG_URL + imageId}
          alt=""
        />
      </div>
    </>
  );
}

export function PopCuisinesCardBig(props) {
  const { action, imageId } = props.each;
  const { setQuery } = props;
  const navigate = useNavigate();
  let items = action.link.split("=");
  let item = items[items.length - 1];
  let query = decodeURIComponent(item);
  return (
    <>
      <div
        onClick={() => {
          navigate("/home");
          setQuery(query);
        }}
        className="flex h-40 w-40  "
      >
        <img className=" cursor-pointer" src={IMG_URL + imageId} alt="" />
      </div>
    </>
  );
}
