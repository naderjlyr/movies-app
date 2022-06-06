import React from "react";
import "./App.scss";
import AppRoutes from "./config/AppRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from "./features/store";
import { Provider } from "react-redux";

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
const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default AppWrapper;
