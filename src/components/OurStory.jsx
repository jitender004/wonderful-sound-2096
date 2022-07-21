import React from "react";
import { Box, VStack, Flex } from "@chakra-ui/react";
import { ourstory } from "../utils/data";
const OurStory = () => {
  return (
    <Box>
      <VStack
        width={"15%"}
        m={" 0 auto"}
        p={5}
        color={"#474747"}
        fontSize={"12px"}
        fontWeight={"600"}
        alignItems={"start"}
      >
        {ourstory.map((el) => {
          return <Box _hover={{ borderBottom: "2px solid #77B6ED" }}>{el}</Box>;
        })}
      </VStack>
    </Box>
  );
};

export default OurStory;
