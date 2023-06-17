import React, { createContext, useContext, useEffect } from "react";
import { UseContext } from "../UseState/UseContext";

const UseEffectContext = createContext();

const UseEffectState = (props) => {
  const { setProgress, location } = useContext(UseContext);

  const state = { name: "harry", class: "5b" };

  useEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // eslint-disable-next-line
  }, [location]);

  return (
    <UseEffectContext.Provider value={{ state }}>
      {props.children}
    </UseEffectContext.Provider>
  );
};

export { UseEffectContext, UseEffectState as default };
