import {
  Box,
  Button,
  Heading,
  Text,
  Link,
  Input,
  Image,
  HStack,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import {Link as RouterLink} from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.AuthReducer.cartItems);

  console.log(cartItems);
  return (
    <Box justifyContent="center">
      <Heading
        as="p"
        textAlign="center"
        fontFamily="RFFontRoman, Arial, sans-serif;"
        size="30px"
        fontWeight="500"
        lineHeight="36px"
        color="#272829"
      >
        REVIEW YOUR BAG
      </Heading>
      <Box justifyContent="center">
        <Box border="" width="65%" marginLeft="17%">
          <Box
            backgroundColor="rgb(210,216,250)"
            height="40px"
            justifyContent="center"
          >
            <Text
              fontSize="10px"
              lineHeight="18px"
              color="#31668c"
              fontWeight="400"
            >
              {" "}
              Thank you for your order. Please note that R+F Instant Targeted
              Firming Gel Full Size will be shipped separately on a later date
              in July.
            </Text>
          </Box>

          {/* profuct box and order summery */}
          <Box display="flex" marginTop="20px">
            <Box
              border=""
              width="60%"
              justifyContent="center"
              textAlign="center"
            >
              <Box justifyContent="center" backgroundColor="#aebac1">
                <img
                  height="20px"
                  style={{
                    paddingTop: "5px",
                    marginLeft: "35%",
                    padding: "20px",
                  }}
                  src="https://www.rodanandfields.com/en-us/_ui/images/pcperks_upsell/pc-perks-logo.png"
                />
                <Text
                  fontSize="10px"
                  lineHeight="18px"
                  color="black"
                  fontWeight="400"
                >
                  {" "}
                  Subscribe {"&"} Save $11.00!{" "}
                </Text>
                <Text
                  fontSize="10px"
                  lineHeight="6px"
                  color="black"
                  fontWeight="400"
                >
                  Join PC Perks for $19.95 to Save 10% + Get Free Shipping on
                  orders $80+{" "}
                </Text>
                <Link
                  href="#"
                  fontSize="10px"
                  lineHeight="6px"
                  color="black"
                  fontWeight="400"
                >
                  view more
                </Link>
                <br />
                <Button
                  marginBottom="10px"
                  height="25px"
                  width="60%"
                  backgroundColor="black"
                  color="white"
                  fontSize="9px"
                >
                  ADD MEMBERSHIP - $19.95
                </Button>
              </Box>
              <br />
              {/* left half after add MEMBERSHIP */}

              <Box>
                <HStack
                  spacing="24px"
                  border="1px solid grey"
                  height="98px"
                  justifyContent="space-evenly"
                >
                  <Box boxSize="50px">
                    <Image
                      src="https://www.rodanandfields.com/en-us/medias/ENHLSH01-458x458.jpg?context=bWFzdGVyfGltYWdlc3w0MDkxfGltYWdlL2pwZWd8aW1hZ2VzL2gzNS9oODgvMTM5Nzc1NDQ2ODc2NDYuanBnfDlmYTEwMTFkMjFiNzMwYjlhNjU0NTNiYjU5ZDBmMGY3ZWIzNmNiZmYwMTJhMGYzMTFkMzA1ODhkOGI1MjdlMmE"
                      alt="Dan Abramov"
                    />
                  </Box>
                  <Box>
                    <Text
                      fontSize="10px"
                      fontWeight="500"
                      color="black"
                      textAlign="left"
                      padding="5px"
                      lineHeight="5px"
                    >
                      {" "}
                      TOTAL RF SERUM
                    </Text>
                    <Box border="1px solid black">
                      <Button>-</Button>
                      <Button>1</Button>
                      <Button>+</Button>
                    </Box>
                  </Box>
                  <Box>
                    <DeleteIcon />
                    <Text
                      fontSize="10px"
                      fontWeight="500"
                      color="black"
                      textAlign="left"
                      padding="5px"
                      lineHeight="5px"
                    >
                      {" "}
                      $350.00
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>

            {/* flex right part */}

            <Box border="" marginLeft="15px" width="38%">
              <Box border="1px solid grey" borderRadius="5px">
                <Box height="35px" backgroundColor="#e4e4e4" marginTop="0px">
                  <Text
                    fontSize="10px"
                    fontWeight="500"
                    color="black"
                    textAlign="left"
                    padding="5px"
                    paddingTop="10px"
                    lineHeight="8px"
                  >
                    {" "}
                    ORDER SUMMARY{" "}
                  </Text>
                </Box>
                <Box display="flex" marginTop="5px">
                  <Text
                    fontSize="10px"
                    fontWeight="500"
                    color="black"
                    textAlign="left"
                    padding="5px"
                    lineHeight="5px"
                  >
                    {" "}
                    SUB TOTAL{" "}
                  </Text>
                  <Text
                    fontSize="10px"
                    fontWeight="500"
                    color="black"
                    marginLeft="40%"
                    padding="5px"
                    justifyContent="end"
                    lineHeight="5px"
                  >
                    {" "}
                    $ 150.0{" "}
                  </Text>
                </Box>
                <Box display="flex" marginTop="5px">
                  <Text
                    fontSize="10px"
                    fontWeight="500"
                    color="black"
                    textAlign="left"
                    padding="5px"
                    paddingTop="5px"
                    lineHeight="5px"
                  >
                    {" "}
                    SHIPPING{" "}
                  </Text>
                  <Text
                    fontSize="10px"
                    fontWeight="500"
                    color="black"
                    marginLeft="30%"
                    padding="5px"
                    paddingTop="5px"
                    justifyContent="end"
                    lineHeight="5px"
                  >
                    {" "}
                    Calculated At Checkout{" "}
                  </Text>
                </Box>
                <hr />
                <Box display="flex" marginTop="5px">
                  <Text
                    fontSize="10px"
                    fontWeight="600"
                    color="black"
                    textAlign="left"
                    padding="5px"
                    paddingTop="5px"
                    lineHeight="5px"
                  >
                    {" "}
                    Estimated Total{" "}
                  </Text>
                  <Text
                    fontSize="10px"
                    fontWeight="600"
                    color="black"
                    marginLeft="30%"
                    padding="5px"
                    paddingTop="5px"
                    justifyContent="end"
                    lineHeight="5px"
                  >
                    $105.00{" "}
                  </Text>
                </Box>
                <hr />
                <Box display="flex" marginTop="10px">
                  <Input
                    height="25px"
                    borderRadius="5px"
                    border="1px solid black"
                    w="70%"
                    placeholder="Enter Promo Code"
                  ></Input>
                  <Button
                    height="30px"
                    borderRadius="5px"
                    border="1px solid black"
                    width="30%"
                  >
                    <Text
                      fontSize="10px"
                      fontWeight="600"
                      color="black"
                      textAlign="left"
                      padding="5px"
                      paddingTop="0px"
                      lineHeight="1px"
                    >
                      {" "}
                      Apply{" "}
                    </Text>
                  </Button>
                </Box>
              </Box>
              <br />
              <Button
                height="30px"
                borderRadius="5px"
                border="1px solid black"
                width="100%"
              >
                <Text
                  fontSize="10px"
                  fontWeight="500"
                  color="black"
                  textAlign="left"
                  padding="5px"
                  paddingTop="0px"
                  lineHeight="18px"
                >
                  {" "}
                  CONTINUE SHOPING{" "}
                </Text>
              </Button>
              <br />
              <Button
                height="30px"
                borderRadius="5px"
                marginTop="8px"
                border="1px solid black"
                width="100%"
                bg="black"
              >
                <Text
                  fontSize="10px"
                  fontWeight="500"
                  color="white"
                  padding="5px"
                  paddingTop="0px"
                  lineHeight="18px"
                >
                  <RouterLink to="/checkout">
                  SECURE CHECKOUT
                  </RouterLink>
                  
                </Text>
              </Button>

              <HStack
                spacing="4px"
                justifyContent="space-evenly"
                marginTop="5px"
              >
                <Box>
                  <Text
                    fontSize="8px"
                    fontWeight="500"
                    color="black"
                    lineHeight="5px"
                  >
                    {" "}
                    We Accept
                  </Text>
                </Box>
                <Box>
                  <Image
                    height="15px"
                    src="https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-paypal.png"
                    alt="Dan Abramov"
                  />
                </Box>
                <Box>
                  <Image
                    height="15px"
                    src="https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-visa.png"
                    alt="Dan Abramov"
                  />
                </Box>
                <Box>
                  <Image
                    height="15px"
                    src="https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-mastercard.png"
                    alt="Dan Abramov"
                  />
                </Box>
                <Box>
                  <Image
                    height="15px"
                    src="https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-discover.png"
                    alt="Dan Abramov"
                  />
                </Box>
                <Box>
                  <Image
                    height="15px"
                    src="https://www.rodanandfields.com/en-us/_ui/images/card-icons/cc-amex.png"
                    alt="Dan Abramov"
                  />
                </Box>
                <Box>
                  <Image
                    height="15px"
                    src="https://www.rodanandfields.com/en-us/_ui/images/card-icons/klarna-logo.png"
                    alt="Dan Abramov"
                  />
                </Box>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
