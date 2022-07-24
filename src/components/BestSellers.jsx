import React from "react";
import { Box, Text } from "@chakra-ui/react";
import SwipeToSlide from "./SwipeToSlide";
import { Link as CustomLink } from "react-router-dom";

const BestSellers = () => {
  return (
    <Box>
      <Box textAlign={"end"} bg={"#FFFFFF"} p={"10px 20px"}>
        <CustomLink to="#">
          <Text display={"inline-block"} borderBottom={"1px solid black"}>
            Shop Best Sellers
          </Text>
        </CustomLink>
      </Box>
      <SwipeToSlide />
    </Box>
  );
};

export default BestSellers;
