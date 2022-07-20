import React, { useState } from "react";
import {
  Input,
  Box,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
  Alert,
  AlertIcon,
  FormHelperText,
  FormErrorMessage,FormControl
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const InputStyle = {
  focusBorderColor: "none",
};
const Login = () => {
  const [danger, setDanger] = useState(false);
  const [user, setuser] = useState({});
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const handleLoginUser = () => {
    if (user.username === "") {
      console.log("arun");
    }
    if (user.password === "") {
      console.log("pass");
    }
  };
  const handleLogin = (e) => {
    const { name, value } = e.target;

    setuser({
      ...user,
      [name]: value,
    });
  };
 
 
  return (
    <Box w={["22rem", "25rem"]} m="auto">
 

      <Text
        textTransform="upperCase"
        textAlign="center"
        fontWeight="bold"
        mb="2rem"
      >
        Sign In
      </Text>
      <Box>
        {danger ? (
          <Alert status="error">
            <AlertIcon />
            Invalid credentials
          </Alert>
        ) : null}

        <Text>Username</Text>
        <Input
          {...InputStyle}
          type="text"
          name="username"
          onChange={handleLogin}
        />
        <HStack justifyContent="space-between">
          <Text>Password</Text>
          <Text textAlign="end" pt="3" color="blue.600" fontSize="xs">
            Forgot Password?
          </Text>
        </HStack>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            name="password"
            {...InputStyle}
            onChange={handleLogin}
          />
          <InputRightElement width="4.5rem">
            <Box h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <ViewIcon /> : <ViewOffIcon />}
            </Box>
          </InputRightElement>
        </InputGroup>
        <Box>
          <Text fontSize="xs" mt="2rem" mb="2">
            This site is protecter by reCAPTCHA and the{" "}
            <Text as="u" color="blue.600">
              Google Privacy Policy
            </Text>{" "}
            and{" "}
            <Text as="u" color="blue.600">
              Terms of Service
            </Text>{" "}
            apply.
          </Text>
          <Text fontSize="xs">
            We updated our{" "}
            <Text as="u" color="blue.600">
              Terms {"&"} Conditions
            </Text>{" "}
            on 8/3/21. By clicking "SIGN IN" you agree to our updated terms, in
            addition to our{" "}
            <Text as="u" color="blue.600">
              Privacy Policy.
            </Text>
          </Text>
        </Box>
      </Box>
      <Button
        textTransform="upperCase"
        w="100%"
        mt="2rem"
        // isLoading
        colorScheme="#112"
        bg="#111"
        onClick={handleLoginUser}
        // spinner={<BeatLoader size={8} color="white" />}
      >
        Sign In
      </Button>
      <Button
        textTransform="upperCase"
        w="100%"
        mt="1rem"
        color="#111"
        border="1px solid #111"
        bg="#fff"
        _hover={{
          background: "white",
          color: "#111",
        }}

        // spinner={<BeatLoader size={8} color="white" />}
      >
        Create new Account
      </Button>
    </Box>
  );
};
export default Login;
