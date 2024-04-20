import Header from "../components/header";
import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div className="flex flex-col gap-7 p-10 items-center font-semibold text-5xl text-gray-500">
        <div>
          <h1>
            {error.status} {error.statusText}
          </h1>
        </div>
        <div>
          <h3 className="text-xl">{error.data} </h3>
        </div>
      </div>
    </>
  );
}
