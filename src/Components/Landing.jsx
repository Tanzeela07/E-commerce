import { Box, Typography } from "@mui/material";
import React from "react";

export default function Landing() {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/laptop-small-shopping-cart-white-background-internet-shopping-concept_392895-170927.jpg?semt=ais_hybrid)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
      }}
    >
      <Box sx={{
        height:"90vh",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundImage:"linear-gradient(113deg, #070743a8, #7d4a66b8)",
        flexDirection:"column"
      }}>

      <h1 style={{color:"white", fontSize:"60px"}}>WELCOME</h1>
      <h2 style={{color:"white", fontSize:"35px"}}>TO</h2>
      <h1 style={{color:"blue", fontSize:"85px"}}>E COMMERCE</h1>
      </Box>
    </Box>
  );
}
