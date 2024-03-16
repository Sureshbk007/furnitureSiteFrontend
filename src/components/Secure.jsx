import React from "react";
import { useSelector } from "react-redux";
import { Login } from "../pages";

function Secure({ children }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return isLoggedIn ? { children } : <Login />;
}

export default Secure;
