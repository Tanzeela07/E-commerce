import { Box } from "@mui/material";
import React from "react";
import AboutContenet from "../Components/AboutContenet";
import Shopping from "../Assest/image/about.jpg";
export default function About() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Shopping})`,
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            backgroundImage: "linear-gradient(113deg, #070743a8, #7d4a66b8)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <h1 style={{color:"white", fontSize:"75px"}}>ABOUT US</h1>
        </Box>
      </Box>
      <Box sx={{ p: 5 }}>
        <AboutContenet />
      </Box>
    </Box>
  );
}
