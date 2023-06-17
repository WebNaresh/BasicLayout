import Alert from "@mui/material/Alert";
import { useContext } from "react";
<<<<<<< HEAD
import { UseContext } from "../../State/UseState/UseContext";
=======
import UseContext from "../../State/UseState/UseContext";
>>>>>>> f0b67ca84710bdef000d1a017c26698056f8e002
import Snackbar from "@mui/material/Snackbar";

export default function AppAlert() {
  const { appAlert, setAppAlert } = useContext(UseContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return setAppAlert({
        ...appAlert,
        alert: false,
      });
    }
    setAppAlert({
      ...appAlert,
      alert: false,
    });
  };
  return (
    <>
      {/* <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert> */}
      <Snackbar
        open={appAlert.alert}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={appAlert.type}
          sx={{ width: "100%" }}
        >
          {appAlert.msg}
        </Alert>
      </Snackbar>
    </>
  );
}
