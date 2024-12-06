import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { AddBox } from "@mui/icons-material";
import { Box } from "@mui/material";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Box>
          <NavBar />
        </Box>
        <Box sx={{ minHeight: "100vh" }}>
          <Routes>
            <Route extact path="/" element={<Home />} />
            <Route extact path="/about" element={<About />} />
            <Route extact path="/shop" element={<Shop />} />
            <Route extact path="/product-details/:id" element={<SingleProduct />} />
          </Routes>
        </Box>
        <Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
