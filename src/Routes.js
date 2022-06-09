import React from "react";
import SettingsRestaurant from "pages/SettingsRestaurant";
import CustomerReviews from "pages/CustomerReviews";
import OrdersRestaurant from "pages/OrdersRestaurant";
import Menu from "pages/Menu";
import DashboardRestaurant from "pages/DashboardRestaurant";
import SettingsCustomer from "pages/SettingsCustomer";
import Bills from "pages/Bills";
import Notification from "pages/Notification";
import OrderHistory from "pages/OrderHistory";
import Chat from "pages/Chat";
import FavoriteMenu from "pages/FavoriteMenu";
import FoodOrder from "pages/FoodOrder";
import DashboardCustomer from "pages/DashboardCustomer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardCustomer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/foodorder" element={<FoodOrder />} />
        <Route path="/favoritemenu" element={<FavoriteMenu />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/settingscustomer" element={<SettingsCustomer />} />
        <Route path="/dashboardrestaurant" element={<DashboardRestaurant />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ordersrestaurant" element={<OrdersRestaurant />} />
        <Route path="/customerreviews" element={<CustomerReviews />} />
        <Route path="/settingsrestaurant" element={<SettingsRestaurant />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
