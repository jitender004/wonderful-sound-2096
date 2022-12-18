import React, { Component } from "react";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Heading,
  VStack,
  Image,
  Text,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { bestSellers } from "../utils/data";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addItemCart } from "../Redux/appReducer/action";
export default class SwipeToSlide extends Component {
  
  render() {
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function (index) {},
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
    // const dispatch = useDispatch();
    // const addToCart = (item) => {
    //   alert("Item added Successfully!");
    //   dispatch(addItemCart(item));
    // };
    return (
      <Box
        bg={"#F8F4EE"}
        maxWidth="1360px"
        m="auto"
        py="20px"
        overflowX="hidden"
      >
        <Slider {...settings}>
          <Box>
            <Text
              w="63%"
              m="auto"
              fontFamily="RFFONTROMAN"
              fontSize="40px"
              fontWeight="100"
            >
              Discover the life-changing products loved by millions.
            </Text>
            <Box
              m="auto"
              w="300px"
              h="300px"
              backgroundImage={
                "url(https://www.rodanandfields.com/en-us/medias/Best-Sellers-Image-Desktop.jpg?context=bWFzdGVyfHJvb3R8NjA5MTd8aW1hZ2UvanBlZ3xoOTcvaGNkLzEyODg5MTg3ODExMzU4LmpwZ3w2ZGZjZGYxNzg4ZDY2ODI2NzQyZTMyNGI2YmExYmRkNGNjYTBkNGI4MzE5OTIwM2M4M2Q1MGZlMmY1YmFjMDJk)"
              }
              backgroundSize="cover"
            >
              <Link href="#">
                <Box
                  mt="10"
                  ml="10"
                  cursor="pointer"
                  display="inline-block"
                  borderBottom="1px solid black"
                >
                  Shop Best Sellers
                </Box>
              </Link>
            </Box>
          </Box>
          {bestSellers.map((item) => {
            return (
              <Box
                key={item.id}
                bg={"#FFFFFF"}
                p={"10px 10px"}
                my="20px"
                position="relative"
              >
                <Text
                  position="absolute"
                  right="10"
                  top="7"
                  p="2px"
                  fontSize="14px"
                  border={"1px solid #B0B0B0"}
                  color="#B0B0B0"
                >
                  Best Seller
                </Text>
                <Box>
                  <Image
                    w={"230px"}
                    m={"auto"}
                    objectFit={"cover"}
                    src={item.thumb_image}
                  />
                </Box>
                <Box my={2}>
                  <Text
                    h={"50px"}
                    fontSize="16px"
                    color="#222222"
                    fontWeight="600"
                  >
                    {item.product_name}
                  </Text>
                </Box>
                <Text h={100} fontSize="14px" color="#222222" m={"9px 0 16px"}>
                  {item.description}
                </Text>
                <Text fontSize="16px" color="#222222" fontWeight="600">
                  ${item.price}
                </Text>
                <Text fontSize="12px">{item.price_type}</Text>
                <Flex gridGap={"10px"} mt="10px">
                  <Box>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </Box>
                  <Flex>
                    <Text>{item.ratings}</Text>
                    <Text>({item.reviews})</Text>
                  </Flex>
                </Flex>
                <Button
                  w={"100%"}
                  mt="20px"
                  bg="#FFFFFF"
                  border="1px solid black"
                  onClick={()=>addItemCart(item)}
                >
                  ADD TO BAG
                </Button>
              </Box>
            );
          })}
        </Slider>
      </Box>
    );
  }
}
