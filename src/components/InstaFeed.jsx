import React, { Component, useState } from "react";
import "../index.css";
import Slider from "react-slick";
import { instaPosts } from "../utils/data";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import "../App.css";
export const InstaFeed = () => {
  const [data, setData] = useState(instaPosts);
  const [over, setOver] = useState(false);
  const [out, setOut] = useState(true);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleMouseOver = (index) => {
    console.log("over");
    if (over) {
      return;
    }
    data[index].status = false;
    setOver(true);
    setOut(false);
    setData([...data]);
  };

  const handleMouseOut = (index) => {
    console.log("out");
    if (out) {
      return;
    }
    setOut(true);
    setOver(false);
    data[index].status = true;
    setData([...data]);
  };

  return (
    <>
      <Box maxW="1360px" m="auto" overflowX="hidden" py="30px">
        <Text fontWeight="400" fontSize="22px" color="#56575f">
          @Rodanandfields
        </Text>
        <Slider {...settings}>
          {data.map((post, index) => {
            return (
              <Box
                key={post.id}
                w="20%"
                px="10px"
                position="relative"
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut(index)}
              >
                <Image w="100%" h="250px" src={post.img} />
                {post.status === false && (
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent={"center"}
                    alignItems="center"
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="#FFFFFF"
                    opacity="0.85"
                  >
                    <Box w="50%" m="auto" textAlign="center">
                      <Image
                        w="30px"
                        m="auto"
                        cursor="pointer"
                        src="https://img.icons8.com/material-outlined/2x/instagram-new.png"
                      />
                      <Button bg="#2F84ED" color="#FFFFFF" mt="5px" px="50px">
                        Shop Now
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            );
          })}
        </Slider>
      </Box>
      <Box bg="#E1EAF1" py="30px">
        <Flex
          w="70%"
          m="auto"
          bg="#FFFFFF"
          justifyContent="space-between"
          p="10px 20px"
          borderRadius="6px"
        >
          <Flex gridGap="20px">
            <Text
              w="50%"
              pl="60px"
              fontFamily="RFFontRoman"
              fontSize="30px"
              fontWeight="normal"
              color="#222222"
            >
              Personalized Skincare Services
            </Text>
            <UnorderedList fontFamily="ProximaNovaRegular,Arial,Sans-Serif;">
              <ListItem>Customized recommendations</ListItem>
              <ListItem> Learn more about our products</ListItem>
              <ListItem>Enjoy ongoing skincare advice</ListItem>
            </UnorderedList>
          </Flex>
          <Button
            mr="30px"
            mt="20px"
            px="30px"
            colorScheme="black"
            variant={"outline"}
          >
            FIND A CONSULTANT
          </Button>
        </Flex>
      </Box>
    </>
  );
};
