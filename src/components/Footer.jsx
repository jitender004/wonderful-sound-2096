import { ReactNode } from "react";
import {
  Box,
  Flex,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaFacebookF,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"#FFFFFF"} color="#606060" pl={{ base: "10px" }}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"flex-start"} fontSize="12px">
            <Text mb="10px" fontWeight="bold">
              ABOUT R+F
            </Text>
            <Link mb="10px" href={"#"}>
              PRESS ROOM
            </Link>
            <Link pb="10px" href={"#"}>
              COMPANY INFO
            </Link>
            <Link pb="10px" href={"#"}>
              EXECUTIVE TEAM
            </Link>
            <Link pb="10px" href={"#"}>
              CAREERS
            </Link>
            <Link pb="10px" href={"#"}>
              R+F RECYCLING PROGRAM
            </Link>
            <Link pb="10px" href={"#"}>
              BLOG
            </Link>
          </Stack>

          <Stack align={"flex-start"} fontSize="12px">
            <Text mb="10px" fontWeight="bold">
              HELP
            </Text>
            <Link mb="10px" href={"#"}>
              PRODUCT & HELP CENTER
            </Link>
            <Link mb="10px" href={"#"}>
              SHIPPING
            </Link>
            <Link mb="10px" href={"#"}>
              SATISFACTION GUARANTEE
            </Link>
            <Link mb="10px" href={"#"}>
              PROMOTIONAL TERMS & CONDITIONS
            </Link>
            <Link mb="10px" href={"#"}>
              R+F FAQS
            </Link>
            <Link mb="10px" href={"#"}>
              KLARNA
            </Link>
            <Link mb="10px" href={"#"}>
              SITE MAP
            </Link>
          </Stack>
          <Stack>
            <Text fontSize="24px" fontFamily="RFFONTROMAN" mb="30px">
              Let’s Get Social
            </Text>
            <Flex gridGap="50px">
              <FaFacebookF fontSize="20px" />
              <FaTwitter fontSize="20px" />
              <FaInstagram fontSize="20px" />
              <FaYoutube fontSize="20px" />
              <FaPinterest fontSize="20px" />
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"}>
        <Flex fontSize="12px" gridGap="10px" pl="20px" pt="10px" pb="50px">
          <Text>© 2022 Rodan & Fields</Text>
          <Text>Privacy Policy</Text>
          <Text>|</Text>
          <Text>Terms & Conditions</Text>
          <Text>|</Text>
          <Text>Accessibility</Text>
          <Text>|</Text>
          <Text>California Supply Chains Act</Text>
          <Text>|</Text>
          <Text>DSA Code Of Ethics</Text>
          <Text>|</Text>
          <Text>Disclaimer</Text>
          <Text>|</Text>
          <Text>Preference Center</Text>
        </Flex>
      </Box>
    </Box>
  );
}
