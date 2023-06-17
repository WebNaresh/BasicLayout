import React from "react";
import { useContext } from "react";
import LoadingBar from "react-top-loading-bar";
import { UseContext } from "../../State/UseState/UseContext";

const TopLoadingBar = () => {
  const { setProgress, progress } = useContext(UseContext);
  return (
    <LoadingBar
      color="#01d293"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default TopLoadingBar;
