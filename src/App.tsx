import React from "react";
import "./App.scss";
import AppRoutes from "./config/AppRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="container">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
