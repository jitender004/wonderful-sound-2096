import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import StarRating from "./StarRating";
import { addToCartItem } from "../../Redux/AuthReducer/action.js";
import { useDispatch } from "react-redux";
const ProductCard = ({ products, cate }) => {
  const dispatch = useDispatch();
 

  const handleAddToBag = (e, products) => {
    dispatch(addToCartItem(products));
  };

  return (
    <>
      {products.map((products) => (
        <Box
          key={products._id}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          paddingBottom={"50px"}
        >
          <Box>
            <Image src={products.img} alt="product-img" />
          </Box>
          <Box paddingBottom={"10px"}>
            <Text fontSize={"12px"} color={"gray"} paddingBottom={"10px"}>
              {products.title}
            </Text>
            <Text fontWeight={"semibold"} paddingBottom={"10px"}>
              {products.name}
            </Text>
            <Text>{products.description} </Text>
            <Text paddingBottom={"10px"}>${products.price}</Text>
            <Text
              paddingBottom={"10px"}
              display="flex"
              justifyContent={"left"}
              gap="2"
              alignItems={"center"}
              fontSize="sm"
            >
              <StarRating /> {products.rating}
            </Text>
          </Box>
          <Box>
            <Button
              width={"100%"}
              border={"0.3px solid black"}
              bgColor={"white"}
              fontFamily={"sans-serif"}
              fontWeight={"light"}
              onClick={(e) => handleAddToBag(e, products)}
            >
              ADD TO BAG
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
};

export { ProductCard };
