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
import { getUserRegistration } from "../../../Redux/AuthReducer/action.js";
import { REGISTER_USER_SUCCESS } from "../../../Redux/AuthReducer/action.type.js";
import Navbar from "./../../Navbar";

const InputStyle = {
  focusBorderColor: "none",
};
const Signup = () => {
  const [user, setuser] = useState({});
  const [show, setShow] = useState(false);
  const [fieldReq, setFieldReq] = useState(false);
  const [errUser, setErrUser] = useState();
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.AuthReducer);
  const [passMatch, setPassMatch] = useState(true);

  const handleClick = () => setShow(!show);
  const handleRegistrationEnter = (e) => {
    if (e.keyCode === 13) {
      handleRegistrationUser();
    }
  };
  const handleRegistrationUser = () => {
    if (
      user.username === undefined ||
      user.password === undefined ||
      user.email === undefined ||
      user.mobile === undefined
    ) {
      return setFieldReq(true);
    }
    setFieldReq(false);
    dispatch(getUserRegistration(user)).then((res) => {
      if (res.type === REGISTER_USER_SUCCESS && res.errorStatus === false) {
        return console.log("redirect");
      } else if (
        res.type === REGISTER_USER_SUCCESS &&
        res.errorStatus === true
      ) {
        setErrUser(res.errorMess);
        return console.log(res.errorMess, "error");
      }
    });
  };
  const handleRegister = (e) => {
    const { name, value } = e.target;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const matchPassword = (e) => {
    if (e.target.value !== user.password) {
      return setPassMatch(false);
    }
    setPassMatch(true);
  };

  return (
    <>
      <Navbar />
      <Box w={["22rem", "25rem"]} m="auto">
        <Text
          textTransform="upperCase"
          textAlign="center"
          fontWeight="bold"
          mb="2rem"
          fontFamily="s"
          fontSize={["2xl", "4xl"]}
          mt="2rem"
        >
          Create Account
        </Text>
        <Box>
          {errUser === undefined ? null : (
            <Alert status="error" borderRadius="4">
              <AlertIcon />
              {errUser}
            </Alert>
          )}
          {fieldReq ? (
            <Alert status="error" borderRadius="4">
              <AlertIcon />
              Field is required
            </Alert>
          ) : null}

          <Text>Your name</Text>
          <Input
            {...InputStyle}
            type="text"
            name="name"
            onChange={(e) => handleRegister(e)}
          />
          <Text>Username</Text>
          <Input
            {...InputStyle}
            type="text"
            name="username"
            onChange={(e) => handleRegister(e)}
          />
          <Text>Email</Text>
          <Input
            {...InputStyle}
            type="text"
            name="email"
            onChange={(e) => handleRegister(e)}
          />
          <Text>Mobile number</Text>

          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input
              type="tel"
              {...InputStyle}
              name="mobile"
              onChange={(e) => handleRegister(e)}
            />
          </InputGroup>
          <HStack justifyContent="space-between">
            <Text>Password</Text>
          </HStack>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              name="password"
              {...InputStyle}
              onChange={(e) => handleRegister(e)}
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
              onChange={matchPassword}
            />
            <InputRightElement width="4.5rem">
              <Box h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Box>
            </InputRightElement>
          </InputGroup>
          {passMatch ? null : (
            <Alert status="error">
              <AlertIcon />
              Password Not Match
            </Alert>
          )}

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
              on 8/3/21. By clicking "SIGN IN" you agree to our updated terms,
              in addition to our{" "}
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
          onClick={() => handleRegistrationUser()}
          onKeyUp={handleRegistrationEnter}
          colorScheme="#112"
          bg="#111"
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
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};
export default Signup;
