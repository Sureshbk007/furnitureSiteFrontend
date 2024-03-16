import { Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn);
  useEffect(() => {
    setUserLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <header className="bg-brandBg flex items-center flex-col gap-1 pt-5 ">
      <div className="w-full flex gap-2 items-center justify-around">
        <h1 className="text-brandtext text-3xl">
          <Link to="/">Furniture Store</Link>
        </h1>
        <div className="flex gap-3">
          <div className="flex items-center border border-gray-400 px-2 rounded">
            <span>
              <Search />
            </span>
            <input
              type="text"
              className="outline-none px-2 py-1 bg-transparent min-w-[250px]"
            />
          </div>
          <div className="flex gap-2">
            <Link
              to="/cart"
              className="p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-all duration-300"
            >
              <ShoppingCart />
            </Link>
            {userLoggedIn ? (
              <button className="p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-all duration-300">
                <User />
              </button>
            ) : (
              <Link
                to="/login"
                className="text-brandText font-bold border border-gray-400 px-4 rounded-xl hover:border-gray-200 hover:bg-gray-200 transition-all duration-300 flex items-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <nav className="flex items-center gap-6 justify-center pb-1">
        <NavLink
          to="/"
          className={({ isActive }) => ` ${
            isActive ? "text-orange-500" : "text-brandText"
          }  text-lg
        py-2
        px-4
        border-gray-600
        cursor-pointer
        `}
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) => ` ${
            isActive ? "text-orange-500" : "text-brandText"
          }  text-lg
        py-2
        px-4
        border-gray-600
        cursor-pointer
        `}
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => ` ${
            isActive ? "text-orange-500" : "text-brandText"
          }  text-lg
        py-2
        px-4
        border-gray-600
        cursor-pointer
        `}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
