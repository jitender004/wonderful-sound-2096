import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box overflowX="hidden" maxW="1360px" m="auto">
        <Slider {...settings}>
          <Box p="30px 10px 20px 20px">
            <Flex
              flexDirection={{ base: "column-reverse", lg: "row" }}
              justifyContent="space-between"
              bg="#F4EFE7"
              borderRadius="12px"
              overflow="hidden"
            >
              <Box w={{ base: "auto", lg: "40%" }} p="30px 0px 30px  30px">
                <Text
                  fontSize="40px"
                  fontFamily="RFFONTROMAN"
                  fontWeight="normal"
                >
                  Ultimate Eye Cream
                </Text>
                <Text h="75px">6,000 five-star reviews and couting!</Text>
                <Link>
                  <Box
                    borderBottom="1px solid black"
                    display="inline-block"
                    mt="50px"
                  >
                    Shop Now
                  </Box>
                </Link>
              </Box>
              <Box
                w={{ base: "auto", lg: "50%" }}
                h="380px"
                borderRadius="12px"
                overflow="hidden"
              >
                <Image
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  src="https://www.rodanandfields.com/en-us/medias/Homepage-PromoModule-MFEC-Desktop.jpg?context=bWFzdGVyfHJvb3R8MzgyNDU0fGltYWdlL2pwZWd8aDJjL2hkZi8xMzg1NDY1ODIzMjM1MC5qcGd8YjQwNjFlZTlkMDUwNTM2ZDUxZTI2YzE5ZmFhMzM4ZjlkYmQxMTNhNDg2NzJjMDc5NzhmNTEzMTYzYWY5NGI2NA"
                />
              </Box>
            </Flex>
          </Box>
          <Box p="30px 10px 20px 0px">
            <Flex
              flexDirection={{ base: "column-reverse", lg: "row" }}
              justifyContent="space-between"
              bg="#CDE2C7"
              borderRadius="12px"
              overflow="hidden"
            >
              <Box w={{ base: "auto", lg: "40%" }} p="30px 0px 30px  30px">
                <Text fontSize="40px" fontFamily="RFFONTROMAN">
                  Self-Care Essentials
                </Text>
                <Text h="75px">
                  Enjoy a beauty retreat at home with restorative and protective
                  skincare treatments.
                </Text>
                <Link>
                  <Box
                    borderBottom="1px solid black"
                    display="inline-block"
                    mt="50px"
                  >
                    Shop Now
                  </Box>
                </Link>
              </Box>
              <Box w={{ base: "auto", lg: "50%" }} h="380px">
                <Image
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  src="https://www.rodanandfields.com/en-us/medias/Promo-Self-Care.jpg?context=bWFzdGVyfHJvb3R8Mzk2NjI0fGltYWdlL2pwZWd8aGQzL2gzNC8xMjg4OTE4ODc5NDM5OC5qcGd8NzIxN2Y5NThiZWNlYmM4MDUwYTIzM2YyM2FlMDRiOGY1YTAzNTdkYjk1ZjNjMmZiNTlmNmY2MTdkYTA4ODJmMQ"
                />
              </Box>
            </Flex>
          </Box>
          <Box p="30px 20px 20px 0px">
            <Flex
              flexDirection={{ base: "column-reverse", lg: "row" }}
              justifyContent="space-between"
              bg="#F1E1DD"
              borderRadius="12px"
              overflow="hidden"
            >
              <Box w={{ base: "auto", lg: "40%" }} p="30px 0px 30px  30px">
                <Text
                  fontSize="40px"
                  fontFamily="RFFONTROMAN"
                  fontWeight="normal"
                >
                  Bundle + Save!
                </Text>
                <Text h="75px">
                  Save 20% on Lash Boost when you buy a skincare Regimen of your
                  choice.
                </Text>
                <Link>
                  <Box
                    borderBottom="1px solid black"
                    display="inline-block"
                    mt="50px"
                  >
                    Shop Now
                  </Box>
                </Link>
              </Box>
              <Box w={{ base: "auto", lg: "50%" }} h="380px">
                <Image
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  src="https://www.rodanandfields.com/en-us/medias/Promo-Lash-Boost.jpg?context=bWFzdGVyfHJvb3R8MTc2MDI4fGltYWdlL2pwZWd8aDExL2gxMC8xMjg4OTE4ODg1OTkzNC5qcGd8NDI5NjQ3N2JhYTYwNDdmMTMyZDgwY2U0NWZiNGNhYWFkYzgwNWM2YWNhNjRhMzYyOWFmOTBhMTFjMjgxMGNkMg"
                />
              </Box>
            </Flex>
          </Box>
        </Slider>
      </Box>
    );
  }
}
