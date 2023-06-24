import React, { useState, createContext } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

const UseContext = createContext();

export const UseState = (props) => {
  let { first, setFirst } = props;
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const location = useLocation();

  const [appAlert, setAppAlert] = useState({
    alert: true,
    type: "success",
    msg: "this is success alert",
  });

  const [appLoading, setAppLoading] = useState({
    load: false,
    color: "#fff",
  });

  const [progress, setProgress] = useState(0);

  return (
    <UseContext.Provider
      value={{
        cookies,
        setCookie,
        removeCookie,
        appAlert,
        setAppAlert,
        appLoading,
        setAppLoading,
        progress,
        setProgress,
        location,
        first,
        setFirst,
      }}
    >
      {props.children}
    </UseContext.Provider>
  );
};

export { UseContext, UseState as default };
