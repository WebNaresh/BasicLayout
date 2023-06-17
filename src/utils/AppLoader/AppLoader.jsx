import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ReportIcon from "@mui/icons-material/Report";
<<<<<<< HEAD
import { UseContext } from "../../State/UseState/UseContext";
=======
import UseContext from "../../State/UseState/UseContext";
>>>>>>> f0b67ca84710bdef000d1a017c26698056f8e002

const AppLoader = () => {
  const { appLoading } = useContext(UseContext);
  return (
    <>
      {appLoading.load ? (
        <Backdrop
          sx={{
            color: appLoading.color,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={appLoading.load}
        >
          <CircularProgress color={"inherit"}>
            {appLoading.color === "danger" ? <ReportIcon color="danger" /> : ""}
          </CircularProgress>
        </Backdrop>
      ) : (
        ""
      )}
    </>
  );
};

export default AppLoader;
