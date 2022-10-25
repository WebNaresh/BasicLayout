import React from "react";
import { useNavigate } from "react-router-dom";
import UseContext from "./UseContext";
export const UseState = (props) => {
  const state = { name: "harry", class: "5b" };

  const redirect = useNavigate();
  return (
    <UseContext.Provider value={{ state }}>
      {props.children}
    </UseContext.Provider>
  );
};
export default UseState;
