import React from "react";
import { Box, Text } from "@chakra-ui/react";
import SwipeToSlide from "./SwipeToSlide";
import { Link as customLink } from "react-router-dom";
const BestSellers = () => {
  return (
    <Box>
      <Box textAlign={"end"} bg={"#FFFFFF"} p={"10px 20px"}>
        <customLink to="#">
          <Text display={"inline-block"} borderBottom={"1px solid black"}>
            Shop Best Sellers
          </Text>
        </customLink>
      </Box>
      <SwipeToSlide />
    </Box>
  );
};

export default BestSellers;
