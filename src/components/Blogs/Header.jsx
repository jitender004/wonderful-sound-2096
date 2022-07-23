import { Box, Flex, Heading, Image, Center, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import Navbar from "../Navbar";
import BlogSliderSlick from "./BlogSliderSlick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots) => (
    <div
      style={
        {
          // backgroundColor: "#ddd",
          // borderRadius: "50%",
          // padding: "10px",
        }
      }
    >
      <ul style={{ margin: "0px", borderRadius: "50%" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => (
    <div
      style={{
        width: "25px",
        color: "blue",  
        
        borderRadius: "50%",
        color: "black",
        paddingRight: "2px",
        backgroundColor: "black",
        // border: "1px blue solid",
      }}
    >
      {i + 1}
    </div>
  ),
};

const Header = () => {
  return (
    <>
      <Navbar />
      <Box width="96%" margin="auto">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <Box margin={"auto"}>
            <Flex>
              <Center
                textjustify="center"
                lineHeight={"1.2rem"}
                textAlign={"center"}
                w="100%"
                bgColor={"whitesmoke"}
                fontSize="sm"
              >
                <Box>
                  <Heading
                    textAlign={"center"}
                    fontSize={"3xl"}
                    margin="auto"
                    width="70%"
                    letterSpacing="3px"
                    mb={"40px"}
                  >
                   ℜ𝔬𝔡𝔞𝔫 + 𝔉𝔦𝔢𝔩𝔡𝔰 𝔐𝔲𝔩𝔱𝔦-𝔐𝔢𝔡 𝔗𝔥𝔢𝔯𝔞𝔭𝔶 𝔄𝔭𝔭𝔯𝔬𝔞𝔠𝔥
                  </Heading>
                  <Text fontSize="xs" mb={"25px"} width="60%" margin="auto">
                    OUR FOUNDERS DISCUSS THE MAGIC BEHIND WHAT MAKES R+F SKIN
                    CARE WORK.
                  </Text>
                </Box>
              </Center>
              <Image
                boxSize="lg"
                width="100%"
                objectFit="cover"
                cursor={"pointer"}
                src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/08/06_Rodan_Fields_3333_V7_1100x1100-1024x1024.jpg"
              ></Image>
            </Flex>
          </Box>{" "}
          <Box margin={"auto"} width="90%">
            <Flex>
              <Center
                textjustify="center"
                lineHeight={"1.2rem"}
                textAlign={"center"}
                w="100%"
                bgColor={"whitesmoke"}
                fontSize="sm"
              >
                <Box>
                  <Heading fontSize={"2xl"} letterSpacing="3px" mb={"40px"}>
                    𝘏𝘖𝘞 𝘛𝘖 𝘌𝘕𝘙𝘖𝘓𝘓
                  </Heading>
                  <Text fontSize="sm" mb={"25px"} width="80%" margin="auto">
                    Add the products you want to your cart and check the PC
                    Perks box in your shopping bag to opt in on any order $80+
                  </Text>
                </Box>
              </Center>
              <Image
                boxSize="lg"
                width="100%"
                objectFit="cover"
                src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/08/280119_ROD_08_035_FINAL_1100X1100-1024x1024.jpg"
              ></Image>
            </Flex>
          </Box>{" "}
          <Box margin={"auto"} width="90%">
            <Flex>
              <Center
                textjustify="center"
                lineHeight={"1.2rem"}
                textAlign={"center"}
                w="100%"
                bgColor={"whitesmoke"}
                fontSize="sm"
              >
                <Box>
                  <Heading fontSize={"2xl"} letterSpacing="3px" mb={"40px"}>
                    𝘏𝘖𝘞 𝘛𝘖 𝘌𝘕𝘙𝘖𝘓𝘓
                  </Heading>
                  <Text fontSize="sm" mb={"25px"} width="80%" margin="auto">
                    Add the products you want to your cart and check the PC
                    Perks box in your shopping bag to opt in on any order $80+
                  </Text>
                </Box>
              </Center>
              <Image
                boxSize="lg"
                width="100%"
                objectFit="cover"
                src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/10/Niacinamide-Image.jpg"
              ></Image>
            </Flex>
          </Box>
        </Slider>
      </Box>
      <BlogSliderSlick />
    </>
  );
};

export default Header;
