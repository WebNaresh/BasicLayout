import React, { useContext } from "react";
import { createContext } from "react";
import { UseContext } from "../UseState/UseContext";

const TestContext = createContext();

const TestState = (props) => {
  const { setAppAlert, setAppLoading } = useContext(UseContext);

  const handleAlert = (alert, type, msg) => {
    setAppAlert({
      alert: alert || false,
      type: type || "success",
      msg: msg || "this is test message",
    });
  };

  const handleLoader = (load, color) => {
    setAppLoading({
      load: load || true,
      color: color || "#fff",
    });
    setTimeout(() => {
      setAppLoading({
        load: false,
      });
    }, 2000);
  };

  return (
    <TestContext.Provider value={{ handleAlert, handleLoader }}>
      {props.children}
    </TestContext.Provider>
  );
};

export { TestContext, TestState as default };
