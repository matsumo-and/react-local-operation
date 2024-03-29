import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

/**
 * MUI Application全体のテーマを決める
 */
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#303f9f",
  //   },
  //   secondary: {
  //     main: "#e64a19",
  //   },
  // },
  components: {
    // MuiDrawer: {
    //   styleOverrides: {
    //     paper: {
    //       backgroundColor: "#303f9f",
    //       color: "white",
    //     },
    //   },
    // },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
