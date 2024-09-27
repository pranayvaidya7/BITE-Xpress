import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");

  const { logInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-44" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Status: {onlineStatus ? "Online🟢" : "OFFline🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className=" font-bold text-xl px-4">
            Cart -({cartItems.length} items)
          </li>
          <button
            className="login px-4 font-bold"
            onClick={() => setbtnName(btnName === "LogIn" ? "LogOut" : "LogIn")}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{logInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
