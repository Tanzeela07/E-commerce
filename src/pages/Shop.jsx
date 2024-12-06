import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import image from "../Assest/image/download.png";
import shop from "../Assest/image/shop.jpg";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        // console.log(result.data.products)
        setProducts(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products);
  console.log(search);
  const filterProducts =
    search != ""
      ? products.filter((item) =>
          item?.title?.toLowerCase().includes(search.toLowerCase())
        )
      : products;

  const searchProducts = (e) => {
    setSearch(e.target.value);
    axios
      .get(`https://dummyjson.com/products/search?q=${e.target.value}`)
      .then((result) => {
        // console.log(result.data.products)
        setProducts(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${shop})`,
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          justifyContent: "up",
          display: "flex",
          alignItems: "center",
        }}
      >
        {" "}
        <h1 style={{ color: "black", fontSize: "80px" }}>SHOP </h1>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <TextField
          id="outlined-basic"
          label="Search product here"
          placeholder="search product by title"
          type="search"
          variant="outlined"
          value={search}
          onChange={searchProducts}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          p: 5,
        }}
      >
        {filterProducts?.length > 0 ? (
          filterProducts?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={image} alt="" />
            <Typography variant="h6" sx={{ fontWeight: "500" }}>
              Sorry, not found the result!
            </Typography>
            <Typography variant="Caption">
              Place check the spelling or try searching for someting else
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
