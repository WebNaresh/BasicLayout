import React from "react";
import { useNavigate } from "react-router-dom";
import UseContext from "./UseContext";
import { useCookies } from "react-cookie";
export const UseState = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const redirect = useNavigate();
  return (
    <UseContext.Provider value={{ cookies, setCookie, removeCookie, redirect }}>
      {props.children}
    </UseContext.Provider>
  );
};
export default UseState;
