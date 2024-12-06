import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Landing from "../Components/Landing";
import AboutContenet from "../Components/AboutContenet";

export default function Home() {
  return (
    <>
      <Box>
        <Landing />
      </Box>
      <Box sx={{ p: 5 }}>
        <AboutContenet />
      </Box>
    </>
  );
}
