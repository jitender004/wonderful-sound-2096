import React,{useState} from "react";
import {
  Input,
  Box,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
  Alert,AlertIcon
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon} from "@chakra-ui/icons";


const InputStyle = {
  focusBorderColor: "none",
};
const Login = () => {

  const [user, setuser] = useState({})
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleLogin = (e) => {
    const { name, value } = e.target;

    setuser({
      ...user,
      [name]:value
    });
  };
  console.log(user);
  return (
    <Box w={["20rem","25rem"]} m="auto">
      <Text
        textTransform="upperCase"
        textAlign="center"
        fontWeight="bold"
        mb="2rem"
      >
        Sign In
      </Text>
      <Box>
      <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>
        <Text>Username</Text>
        <Input {...InputStyle} type="text" name="username" onChange={handleLogin} />
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
        // spinner={<BeatLoader size={8} color="white" />}
      >
        Sign In
      </Button>
    </Box>
  );
};
export default Login;
