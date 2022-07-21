import React from "react";
import { Box, VStack, Flex } from "@chakra-ui/react";
import { shop } from "../utils_h/data";
console.log(shop.shopByCategory);
const Shop = () => {
  return (
    <Box maxWidth={"1260px"} m={"auto"}>
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
