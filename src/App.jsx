<<<<<<< HEAD
import TestState from "./State/TestFunction/TestContext";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./State/UseEffect/UseEffectContext";
import UseState from "./State/UseState/UseContext";
import AppLoader from "./utils/AppLoader/AppLoader";
import AppAlert from "./utils/AppAlert/AppAlert";
import TopLoadingBar from "./utils/TopLoadingBar/TopLoadingBar";
import TopNav from "./utils/TopNav/TopNav";
import { createTheme, ThemeProvider } from "@mui/material";
// mulitple screen size xs,sm,md,lg,xl

const theme = createTheme({
  palette: {
    primary: {
      main: "#0e1630",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UseState>
          <TestState>
            <UseEffectState>
              <TopLoadingBar />
              <AppLoader />
              <AppAlert />
              <TopNav />
              <Route />
            </UseEffectState>
          </TestState>
        </UseState>
      </BrowserRouter>
    </ThemeProvider>
=======
import TestState from "./State/Test/TestState";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./State/UseEffect/UseEffectState";
import UseState from "./State/UseState/UseState";
import AppLoader from "./utils/AppLoader/AppLoader";
import AppAlert from "./utils/AppAlert/AppAlert";
import TopLoadingBar from "./utils/TopLoadingBar/TopLoadingBar";

function App() {
  return (
    <BrowserRouter>
      <UseState>
        <TestState>
          <UseEffectState>
            <TopLoadingBar />
            <AppLoader />
            <AppAlert />
            <Route />
          </UseEffectState>
        </TestState>
      </UseState>
    </BrowserRouter>
>>>>>>> f0b67ca84710bdef000d1a017c26698056f8e002
  );
}

export default App;
