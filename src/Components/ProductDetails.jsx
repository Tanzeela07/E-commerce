import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid2,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
export default function ProductDetails({ productInfo }) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 345,
            height: 300,
          },
        }}
      > </Box>
        
     
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 spacing={2} container>
          <Grid2 size={{ xs: 12, sm: 2 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
                flexDirection: "column",
              }}
            >
              {productInfo?.images?.map((image, index) => (
                <img
                  onClick={() => setImageIndex(index)}
                  src={image}
                  style={{ width: "100%", cursor: "pointer" }}
                  key={index}
                />
              ))}
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 5 }}>
            <Box
              sx={{
                //backgroundColor:"red",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
              }}
            >
              <img
                src={productInfo?.images[imageIndex]}
                style={{ width: "100%" }}
              />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
                p: 2,
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "500" }}>
                  {productInfo?.brand}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: "500" }}>
                  {productInfo?.title}
                </Typography>
              </Box>
              <Box>
                <Chip
                  color="warning"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <StarPurple500Icon />
                      {productInfo?.rating}
                    </Box>
                  }
                />
              </Box>
              <Box>
                <Typography>{productInfo?.reviews?.length} reviews</Typography>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "500", color: "green" }}
                >
                  Extra {productInfo?.discountPercentage} Off
                </Typography>
              </Box>

              <Box>
                <Typography variant="h4" sx={{ fontWeight: "500" }}>
                  ${productInfo?.price}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h7">
                  {productInfo?.shippingInformation}
                </Typography>
              </Box>
            </Box>

            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>{productInfo?.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Warranty Information</TableCell>
                    <TableCell>{productInfo?.warrantyInformation}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Return Policy</TableCell>
                    <TableCell>{productInfo?.returnPolicy}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>{productInfo?.availabilityStatus}</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid2>
        </Grid2>
        </Box>
    
    </div>
  );
}
