import React from "react";
import { Box, Text } from "@chakra-ui/react";
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
      <Box height={"100px"} width={"100%"} border={"1px solid red"}>
        Navbar
      </Box>
      <Box
        height={"250px"}
        width={"100%"}
        // border={"1px solid blue"}
        bgColor={"rgb(244,245,255)"}
        paddingTop={"30px"}
      >
        <Box margin={"auto"} paddingLeft={"100px"} paddingRight={"300px"}>
          <Text fontSize={"35px"}>Best Sellers</Text>
          <Text fontSize={"20px"}>
            Shop our fan favorites. We've got a full range of skincare products
            including cleansers, creams, serums + more. All created with
            dermatology-inspired formulas to address your skin concerns.
            Experience the transformative results + get the best skin of your
            life.
          </Text>
        </Box>
      </Box>
      {/* prouct render box */}
      <Box height={"500px"} width={"100%"} >
       <ProductCard products={data}/>
      </Box>
      <Box height={"100px"} width={"100%"} border={"1px solid red"}>
        Footer
      </Box>
    </>
  );
};

export { BestSeller };
