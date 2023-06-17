import React from "react";
import { useContext } from "react";
import LoadingBar from "react-top-loading-bar";
<<<<<<< HEAD
import { UseContext } from "../../State/UseState/UseContext";
=======
import UseContext from "../../State/UseState/UseContext";
>>>>>>> f0b67ca84710bdef000d1a017c26698056f8e002

const TopLoadingBar = () => {
  const { setProgress, progress } = useContext(UseContext);
  return (
    <LoadingBar
<<<<<<< HEAD
      color="#01d293"
=======
      color="#f11946"
>>>>>>> f0b67ca84710bdef000d1a017c26698056f8e002
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default TopLoadingBar;
