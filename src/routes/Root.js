import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import App from "../App";
import Order from "../components/Order";
import Paid from "../components/Paid";
import CurrentOrder from "../components/CurrentOrder";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="*" element={<NotFound />} />

        <Route exact path="/newOrder/:id" element={<Order />} />

        <Route exact path="/currentOrder" element={<CurrentOrder />} />
        <Route exact path="/paid" element={<Paid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
