import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
const Baner = () => {
  return (
    <>
      <Box maxWidth={"1360px"} m={"auto"}>
        <Box
          backgroundImage={`url(
          https://www.rodanandfields.com/en-us/medias/22-Regimen-Collage-HP-Banner-72.jpg?context=bWFzdGVyfHJvb3R8Njc0MDM5fGltYWdlL2pwZWd8aGIzL2g0NS8xNTQwNjc0NzU4MjQ5NC5qcGd8MzM4MmE5NDA3ODZiNjZjOGU5ZWQ3MzVmMDJlN2E3YWFjY2ZhMDg1MmY1YzI4ZGRhYzM4YjU4ZGVhZDljYjZhNQ
        )`}
          backgroundSize={{ base: "contain", xl: "cover" }}
          backgroundRepeat="no-repeat"
        >
          <VStack
            w={{ base: "auto", md: "50%", lg: "25%" }}
            p={"30px"}
            ml={"30px"}
            pb={"40px"}
          >
            <Heading
              fontFamily={"RFFONTROMAN"}
              fontSize={"40px"}
              fontWeight={"normal"}
            >
              Experience The Power Of Derm-Designed Skincare
            </Heading>
            <Box fontSize={"md"} py={"20px"}>
              Rodan + Fields is the #1 Premium Skincare Regimen Brand in the
              U.S. for 4 Consecutive Years (2018 – 2021)*
            </Box>
            <Box fontSize={"12px"} paddingBottom={"20px"}>
              *Source Euromonitor International Limited; Beauty and Personal
              Care 2022 Edition; all channels; Premium Skin Care Regimen
              includes Sets and Kits; retail value RSP terms 
            </Box>
            <Button
              w={"100%"}
              bg={"white"}
              m={"30px 0"}
              color={"black"}
              border={"1px solid black"}
              borderRadius={"8px"}
              _hover={{ variant: "outline", border: "none" }}
            >
              SHOP NOW
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Baner;
