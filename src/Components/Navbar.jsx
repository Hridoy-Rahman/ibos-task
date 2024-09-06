import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoBagOutline } from "react-icons/io5";
import { useCart } from "../Provider/CartProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const { cartItems } = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleUserClick = () => {
    setShowLogout(!showLogout);
  };

  const menuItems = (
    <>
      <li className="px-4 font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black py-2 px-4 rounded"
              : "text-black hover:text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="px-4 font-semibold">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black py-2 px-4 rounded"
              : "text-black hover:text-gray-500"
          }
        >
          Products
        </NavLink>
      </li>
      <li className="px-4 font-semibold">
        <NavLink
          to="/category"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black py-2 px-4 rounded"
              : "text-black hover:text-gray-500"
          }
        >
          Category
        </NavLink>
      </li>
      <li className="px-4 font-semibold">
        <NavLink
          to="/custom"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black py-2 px-4 rounded"
              : "text-black hover:text-gray-500"
          }
        >
          Custom
        </NavLink>
      </li>
      <li className="px-4 font-semibold">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 text-black py-2 px-4 rounded"
              : "text-black hover:text-gray-500"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 bg-white mb-8">
      <div className="container mx-auto flex justify-between items-center px-14 py-2 mb-4">
        {/* Logo */}
        <Link>
          <div className="flex items-center">
            <div className="bg-[#1E99F5] rounded-full p-2">
              <img src="/F.png" alt="Logo" className="h-7" />
            </div>
            <p className="text-xl font-bold ml-2">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </p>
          </div>
        </Link>

        {/* Menu Items in the Center */}
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-6">{menuItems}</ul>
        </div>

        {/* Cart and User Profile on the Right */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon with Badge */}
          <Link
            to="/cart"
            className="relative font-semibold hover:text-gray-500"
          >
            <IoBagOutline size={24} />
            {cartItems.length > 0 && ( // Show badge only if cart is not empty
              <span className="absolute -bottom-1 -right-2 bg-black text-white text-xs rounded-full px-1.5">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* User Profile */}
          {user?.email ? (
            <div className="relative">
              <button
                onClick={handleUserClick}
                className="flex items-center focus:outline-none"
              >
                {user?.photoURL ? (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.photoURL}
                    alt={user.email}
                  />
                ) : (
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://i.ibb.co/HpSkhkH/Screenshot-2024-07-28-215941.png"
                    alt="Profile"
                  />
                )}
              </button>
              {/* Logout Menu */}
              {showLogout && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-[#1E99F5] px-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-black font-semibold hover:text-gray-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
