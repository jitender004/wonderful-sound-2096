import React from "react";
import { Box, VStack, Flex } from "@chakra-ui/react";
import { featured } from "../utils/data";
console.log(featured);
const Featured = () => {
  return (
    <Box maxWidth={"1260px"} m={"auto"}>
      <VStack
        width={"31%"}
        m={" 0 auto"}
        p={5}
        color={"#474747"}
        fontSize={"12px"}
        fontWeight={"600"}
        alignItems={"start"}
      >
        {featured.map((el) => {
          return (
            <Box
              //   marginBottom={2}
              _hover={{ borderBottom: "2px solid #77B6ED" }}
            >
              {el}
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Featured;
