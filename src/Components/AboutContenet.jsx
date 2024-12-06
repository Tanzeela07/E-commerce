import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import aboutPicture from "../Assest/image/images.jpg";
export default function AboutContenet() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ sx: 12, sm: 6 }}>
          <img src={aboutPicture} style={{ width: "100%" }} alt="Picture" />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}></Grid2>
        <Typography variant="h5" sx={{ fontWeight: "500", textAlign:"center",width:"100%" }}>
          About <span style={{ color: "#1976d2" }}>Us</span>
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde
          minus nesciunt. Laboriosam accusamus laudantium perferendis molestiae
          modi debitis, esse dolor deserunt in repellendus iure suscipit natus
          ipsam fuga expedita odio quaerat! Eveniet itaque facere reprehenderit
          aliquam, praesentium est velit, quas in tempora nisi libero aperiam
          recusandae atque? Recusandae, obcaecati?
        </Typography>
      </Grid2>
    </Box>
  );
}
