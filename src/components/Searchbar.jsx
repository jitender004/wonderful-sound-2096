import React from "react";
import { Box, VStack, Flex, HStack, Image, Link } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
const Searchbar = ({ setSearchStatus }) => {
  return (
    <Box
      bg={"#FFFFFF"}
      position={"absolute"}
      top={0}
      left={0}
      right={0}
      py={8}
      fontFamily={"-moz-initial"}
      fontWeight="thin"
      h={"325px"}
    >
      <Box w={"70%"} m={"auto"}>
        <Flex alignItems={"center"}>
          <Input variant="flushed" placeholder="Flushed" />
          <CloseIcon onClick={() => setSearchStatus(false)} />
        </Flex>
        <Box color={"#222222"} fontSize={"sm"}>
          Search for products, concerns and keywords.
        </Box>
      </Box>
      <Flex
        w={"70%"}
        m={"40px auto"}
        justifyContent={"space-between"}
        color={"#222222"}
        fontSize={"sm"}
      >
        <VStack w={"33%"} alignItems={"start"}>
          <Box fontWeight={"bold"}>Common Searches</Box>
          <Box>Acne</Box>
          <Box>Moisturizer</Box>
          <Box>Retinol</Box>
          <Box>Face Serum</Box>
          <Box>Brows</Box>
        </VStack>
        <VStack w={"33%"} alignItems={"start"}>
          <Box fontWeight={"bold"}>Popular Products</Box>
          <Box>R+F Lash Boost</Box>
          <Box>REDEFINE Regimen</Box>
          <Box>Multi-Function Eye Cream</Box>
          <Box>Active Hydration Serum</Box>
          <Box>Micro-Dermabrasion Paste</Box>
        </VStack>
        <HStack w={"33%"} alignItems={"start"} gridGap={"10px"}>
          <Box>
            <Image
              w={"200px"}
              h={"150px"}
              src="https://www.rodanandfields.com/en-us/medias/21-GR-Spot-Corrector-Core-Regimen-SEARCH-promotion-widescreen.jpg?context=bWFzdGVyfHJvb3R8MTUxMjN8aW1hZ2UvanBlZ3xoN2EvaDA5LzEyNzgwOTI4MjcwMzY2LmpwZ3xlZDYwZjU3ZDkyMDVhYzEyMmRjYzJjZGMzMjg3OGU2MGI0M2FkYjc0ZmE3YzUzYjgxOTgxMmU4ZjA1OWY1MDAw"
            />
          </Box>
          <VStack alignItems={"start"} w={"50%"}>
            <Box>Tackle stubborn dark marks with REVERSE SPOT CORRECTOR.</Box>
            <Box fontWeight={"bold"} textDecoration={"underline"}>
              Shop Now
            </Box>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Searchbar;
