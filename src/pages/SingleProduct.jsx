import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";

export default function SingleProduct() {
  const [productInfo, setProductInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://dummyjson.com/product/${id}`)
    .then((response) => {
        setProductInfo(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });
},[id]);
console.log(productInfo);
  
  return <div> 
    <Box>
        <ProductDetails productInfo={productInfo}/>
    </Box>
  </div>;

}
