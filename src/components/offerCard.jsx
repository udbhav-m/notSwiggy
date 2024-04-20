import { IMG_URL } from "../assets/constants";

export default function OffersCard(props) {
    const { offerLogo, header, couponCode } = props.offers.info;
    return (
      <div className="w-full">
        <div className="flex gap-2 border min-w-80 p-5 rounded-xl">
          <img className="max-w-12" src={IMG_URL + offerLogo} alt="offerImage" />
          <div>
            <h1 className="font-semibold text-lg">{header}</h1>
            <h1 className="text-gray-500">{couponCode}</h1>
          </div>
        </div>
      </div>
    );
  }