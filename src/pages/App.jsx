import { Outlet } from "react-router-dom";
import Header from "../components/header";
import appStore from "../redux/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
