import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import {useState} from "react";
import { useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";

import axios from "axios";

const BestSeller = () => {
 
    const [data, setData] = useState([]);

    useEffect( ()=>{
        axios({
          url:"https://rodan-field.herokuapp.com/api/products",
          method: "GET"
        })
        .then(res=>{
          setData(res.data);
        })
        .catch(err=>{
          console.log(err);
        })
      },[setData]);
    

   console.log(data)

  return (
    <>
      <Box height={"100px"} width={"100%"} >
        Navbar
      </Box>
      <Box
        height={"250px"}
        width={"100%"}
        // border={"1px solid blue"}
        bgColor={"rgb(244,245,255)"}
        paddingTop={"30px"}
      >
        <Box margin={"auto"} paddingLeft={"100px"} paddingRight={"300px"} marginBottom={"50px"}>
          <Text fontSize={"32px"}>Best Sellers</Text>
          <Text fontSize={"18px"}>
            Shop our fan favorites. We've got a full range of skincare products
            including cleansers, creams, serums + more. All created with
            dermatology-inspired formulas to address your skin concerns.
            Experience the transformative results + get the best skin of your
            life.
          </Text>
        </Box>
      </Box>
      {/* product render box */}
      <Box paddingLeft={"60px"} paddingRight={"60px"}>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
       <ProductCard products={data}/>
       </Grid>
      </Box>
      <Box height={"100px"} width={"100%"}>
        Footer
      </Box>
    </>
  );
};

export { BestSeller };
