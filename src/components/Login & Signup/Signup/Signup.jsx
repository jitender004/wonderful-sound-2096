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
  InputLeftAddon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { getUserLogin } from "../../../Redux/AuthReducer/action.js";
import { REGISTER_USER_SUCCESS } from "../../../Redux/AuthReducer/action.type.js";
import { useNavigate } from "react-router-dom";
const InputStyle = {
  focusBorderColor: "none",
};
const Signup = () => {
  const [user, setuser] = useState({});
  const [show, setShow] = useState(false);
  const [fieldReq, setFieldReq] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegister, isError, isLoading } = useSelector(
    (state) => state.AuthReducer
  );

  const handleClick = () => setShow(!show);
  const handleLoginEnter = (e) => {
    if (e.keyCode === 13) {
      handleLoginUser();
    }
  };
  const handleLoginUser = () => {
    if (user.username === undefined || user.password === undefined) {
      return setFieldReq(true);
    }
    setFieldReq(false);

    dispatch(getUserLogin(user)).then((res) => {
      if (res === REGISTER_USER_SUCCESS) {
        navigate("/", { replace: true });
      }
    });
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
        textAlig.n="center"
        fontWeight="bold"
        mb="2rem"
      >
        Create Account
      </Text>
      <Box>
        {fieldReq ? (
          <Alert status="error">
            <AlertIcon />
            Field is required
          </Alert>
        ) : null}
        {isError ? (
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
        <Text>Email</Text>
        <Input
          {...InputStyle}
          type="text"
          name="username"
          onChange={handleLogin}
        />
        <Text>Mobile number</Text>

        <InputGroup>
          <InputLeftAddon children="+91" />
          <Input type="tel" {...InputStyle} />
        </InputGroup>
        <HStack justifyContent="space-between">
          <Text>Password</Text>
        </HStack>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            name="password"
            {...InputStyle}
            onChange={handleLogin}
          />
        </InputGroup>

        <HStack justifyContent="space-between">
          <Text>Confirm Password</Text>
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
        mt="1rem"
        isLoading={isLoading && isLoading}
        onClick={handleLoginUser}
        onKeyUp={handleLoginEnter}
        colorScheme="#112"
        bg="#111"
        // spinner={<BeatLoader size={8} color="white" />}
      >
        Create new Account
      </Button>
      <Text textAlign="center" p="3">
        Or
      </Text>
      <Button
        textTransform="upperCase"
        w="100%"
        color="#111"
        border="1px solid #111"
        bg="#fff"
        _hover={{
          background: "white",
          color: "#111",
        }}

        // spinner={<BeatLoader size={8} color="white" />}
      >
        Sign In
      </Button>
    </Box>
  );
};
export default Signup;
