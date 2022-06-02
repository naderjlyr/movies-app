import React from "react";
import "./App.scss";
import AppRoutes from "./config/AppRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
