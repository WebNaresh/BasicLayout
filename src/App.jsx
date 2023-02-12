import TestState from "./State/Test/TestState";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./State/UseEffect/UseEffectState";
import UseState from "./State/UseState/UseState";
import AppLoader from "./utils/AppLoader/AppLoader";
import AppAlert from "./utils/AppAlert/AppAlert";
import TopLoadingBar from "./utils/TopLoadingBar/TopLoadingBar";
import TopNav from "./utils/TopNav/TopNav";
import { colors, createTheme, ThemeProvider } from "@mui/material";
// mulitple screen size xs,sm,md,lg,xl

const theme = createTheme({
  palette: {
    primary: {
      main: colors.orange[500],
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
  );
}

export default App;
