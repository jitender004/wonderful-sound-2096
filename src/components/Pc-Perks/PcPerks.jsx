import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PcPerks = () => {
  return (
    <>
    <VStack>
      <Box mb="1.5rem" >
        <Text
          textAlign="center"
          
          color="#55565a"
          fontSize="3rem"
          fontWeight="200"
          fontFamily="'Poppins', sans-serif;"
          letterSpacing="normal"
          lineHeight="normal"
        >
         ℙℂ ℙ𝔼ℝ𝕂𝕊
        </Text>
      </Box>
      <Box width="80%">
        <Text
          fontSize="1rem"
          fontWeight={300}
          color="#222"
          lineHeight="1.8rem"
          letterSpacing=".5"
          textAlign="center"
          textjustify="inter-word"
          fontFamily="ProximaNovaRegular,Arial,Sans-Serif"
        >
          Save money, enjoy free shipping and get a free gift ($50+ retail
          price) with your 2nd order when you match with a Consultant and become
          a Preferred Customer (PC). All for a one-time fee of $19.95. Between
          discounts + free shipping, the membership pays for itself!
        </Text>
      </Box>
    </VStack>
    <Stack>
        
    </Stack>
    </>
  );
};

export default PcPerks;
