import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { featured } from "../utils/data";

const Featured = () => {
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
