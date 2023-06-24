import TestState from "./State/Function/Main";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./State/UseEffect/UseEffectContext";
import UseState from "./State/UseState/UseContext";
import AppLoader from "./utils/AppLoader/AppLoader";
import AppAlert from "./utils/AppAlert/AppAlert";
import TopLoadingBar from "./utils/TopLoadingBar/TopLoadingBar";
import TopNav from "./utils/TopNav/TopNav";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
// mulitple screen size xs,sm,md,lg,xl

function App() {
  const [first, setfirst] = useState([
    { primary: "#0e1630", secondary: "#01d293", mode: "dark" },
  ]);
  // Get the value of a CSS variable
  // const variableValue = getComputedStyle(
  //   document.documentElement
  // ).getPropertyValue("--primary-color");
  // console.log(`🚀 ~ variableValue:`, variableValue);
  // document.documentElement.style.setProperty("--primary-color", "#300e0e");

  const [themeIndex, setThemeIndex] = useState(0);
  const theme = createTheme({
    palette: {
      mode: first[themeIndex].mode,
      primary: {
        main: first[themeIndex].primary,
      },
      secondary: {
        main: first[themeIndex].secondary,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UseState first={first} setFirst={setfirst}>
          <TestState>
            <UseEffectState>
              <TopLoadingBar />
              <AppLoader />
              <AppAlert />
              <TopNav />
              <div style={{ height: "100%", width: "100%" }}>
                <Route />
              </div>
            </UseEffectState>
          </TestState>
        </UseState>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
