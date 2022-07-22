import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import SwipeToSlide from "./SwipeToSlide";
const BestSellers = () => {
  return (
    <Box>
      <Box textAlign={"end"} bg={"#FFFFFF"} p={"10px 20px"}>
        <Link href="#">
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
