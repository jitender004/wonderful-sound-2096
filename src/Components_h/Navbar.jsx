import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Image,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import Shop from "./Shop";
import Featured from "./Featured";
import OurStory from "./OurStory";
import Searchbar from "./Searchbar";
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [shopStatus, setShopStatus] = useState(false);
  const [featuredStatus, setFeaturedStatus] = useState(false);
  const [ourStoryStatus, setOurStoryStatus] = useState(false);
  const [searchStatus, setSearchStatus] = useState(false);
  return (
    <>
      <Box bg={"#FFFF"} boxShadow={" rgba(149, 157, 165, 0.2) 0px 8px 24px;"}>
        <Box borderBottom={"1px solid black"}>
          <Flex
            h={16}
            px={4}
            py={9}
            maxWidth={"1260px"}
            m={"auto"}
            color={"#272929"}
            fontWeight={"600"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Box fontSize={"12px"}>FIND A CONSULTANT</Box>
            <Box>
              <Image
                src={
                  "https://www.rodanandfields.com/en-us/medias/rf-logo.svg?context=bWFzdGVyfGltYWdlc3w3MzczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2MC9oYWIvODgyMjE0NzE4NjcxOC5zdmd8YjNmMmU2YTg5MTM0NTMzM2Y2ODg2ZmRkZTJhNmY2OWZhYmYyYjk5NWQxODkxODFiYjVkY2MxY2NjOWRlMzA5OA"
                }
              />
            </Box>
            <Flex alignItems={"center"} gridGap={7}>
              <Flex
                onClick={() => setSearchStatus(!searchStatus)}
                alignItems={"center"}
                gridGap={2}
              >
                <Box fontSize={"12px"}>Search</Box>
                <SearchIcon h={4} />
              </Flex>
              <Flex alignItems={"center"} gridGap={2}>
                <Box fontSize={"12px"}>Sign in</Box>
                <Image
                  h={3}
                  src={"https://cdn-icons-png.flaticon.com/512/747/747376.png"}
                />
              </Flex>
              <Image
                h={10}
                src={
                  "https://t3.ftcdn.net/jpg/02/18/80/56/240_F_218805689_XFdEHu12ZOap9WylFYbb04MqASrax6VL.jpg"
                }
              />
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
        <Box display={{ xs: "none" }}>
          <HStack
            w={"55%"}
            maxWidth={"1260px"}
            m={"auto"}
            display={{ base: "none", md: "flex" }}
            fontSize={"12px"}
            color={"#3F3F3F"}
            fontWeight={"600"}
            justifyContent={"space-between"}
            gridGap={"10px"}
          >
            <Box
              onMouseOver={() => setShopStatus(true)}
              onMouseOut={() => setShopStatus(false)}
              _hover={{ borderBottom: "2px solid #77B6ED" }}
              py={6}
            >
              SHOP
            </Box>
            <Box _hover={{ borderBottom: "2px solid #77B6ED" }} py={6}>
              BEST SELLERS
            </Box>
            <Box
              onMouseOver={() => setFeaturedStatus(true)}
              onMouseOut={() => setFeaturedStatus(false)}
              _hover={{ borderBottom: "2px solid #77B6ED" }}
              py={6}
            >
              FEATURED
            </Box>
            <Box
              onMouseOver={() => setOurStoryStatus(true)}
              onMouseOut={() => setOurStoryStatus(false)}
              _hover={{ borderBottom: "2px solid #77B6ED" }}
              py={6}
            >
              OUR STORY
            </Box>
            <Box _hover={{ borderBottom: "2px solid #77B6ED" }} py={6}>
              PERKS PROGRAM
            </Box>
            <Box
              _hover={{
                borderBottom: "2px solid #77B6ED",
              }}
              py={6}
            >
              BECOME A CONSULTANT
            </Box>
            <Box _hover={{ borderBottom: "2px solid #77B6ED" }} py={6}>
              BLOG
            </Box>
          </HStack>
        </Box>
      </Box>
      {shopStatus && <Shop />}
      {featuredStatus && <Featured />}
      {ourStoryStatus && <OurStory />}
      {searchStatus && <Searchbar setSearchStatus={setSearchStatus} />}
    </>
  );
}
