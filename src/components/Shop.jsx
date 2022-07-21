import React from "react";
import { Box, VStack, Flex } from "@chakra-ui/react";
import { shop } from "../utils/data";
console.log(shop.shopByCategory);
const Shop = () => {
  return (
    <Box
      maxWidth={"1360px"}
      m={"auto"}
      position={"absolute"}
      top={"142px"}
      left={"0"}
      right={"0"}
      bg={"#FFFFFF"}
      opacity={"0.95"}
    >
      <Flex
        justifyContent={"space-around"}
        p={5}
        color={"#474747"}
        fontSize={"12px"}
        fontWeight={"600"}
      >
        <VStack alignItems={"start"}>
          <Box my={2}>SHOP BY CATEGORY</Box>
          {shop.shopByCategory.map((el) => {
            return (
              <Box mb={2} _hover={{ borderBottom: "2px solid #77B6ED" }}>
                {el}
              </Box>
            );
          })}
        </VStack>
        <VStack alignItems={"start"}>
          <Box my={2}>SHOP BY CONCERN</Box>
          {shop.shopByConcern.map((el) => {
            return (
              <Box mb={2} _hover={{ borderBottom: "2px solid #77B6ED" }}>
                {el}
              </Box>
            );
          })}
        </VStack>
        <VStack alignItems={"start"}>
          <Box my={2}>SHOP BY PRODUCT LINE</Box>
          {shop.shopByProductLine.map((el) => {
            return (
              <Box mb={2} _hover={{ borderBottom: "2px solid #77B6ED" }}>
                {el}
              </Box>
            );
          })}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Shop;
