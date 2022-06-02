// import { Category } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
