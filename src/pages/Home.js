import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">DashboardCustomer</Link>
        </li>
        <li>
          <Link to="/foodorder">FoodOrder</Link>
        </li>
        <li>
          <Link to="/favoritemenu">FavoriteMenu</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/orderhistory">OrderHistory</Link>
        </li>
        <li>
          <Link to="/notification">Notification</Link>
        </li>
        <li>
          <Link to="/bills">Bills</Link>
        </li>
        <li>
          <Link to="/settingscustomer">SettingsCustomer</Link>
        </li>
        <li>
          <Link to="/dashboardrestaurant">DashboardRestaurant</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/ordersrestaurant">OrdersRestaurant</Link>
        </li>
        <li>
          <Link to="/customerreviews">CustomerReviews</Link>
        </li>
        <li>
          <Link to="/settingsrestaurant">SettingsRestaurant</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;