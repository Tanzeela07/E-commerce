import { Box, Typography } from "@mui/material";

import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Copyright @ 2024 E-Commerce Website.
      </Typography>
    </Box>
  );
}
