import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SwipeToSlide from "./SwipeToSlide";
const BestSellers = () => {
  return (
    <Box>
      <Box textAlign={"end"} bg={"#FFFFFF"} p={"10px 20px"}>
        <Link to="#">
          <Text display={"inline-block"} borderBottom={"1px solid black"}>
            Shop Best Sellers
          </Text>
        </Link>
      </Box>
      <SwipeToSlide />
    </Box>
  );
};

export default BestSellers;
