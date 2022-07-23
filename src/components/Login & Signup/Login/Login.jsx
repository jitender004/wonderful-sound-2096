import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { getUserLogin } from "../../../Redux/AuthReducer/action.js";
import { LOGIN_USER_SUCCESS } from "../../../Redux/AuthReducer/action.type.js";
import { useNavigate } from "react-router-dom";
import Navbar from "./../../Navbar";
import { Link as RouterLink } from "react-router-dom";
const InputStyle = {
  focusBorderColor: "none",
};
const Login = () => {
  const [user, setuser] = useState({});
  const [show, setShow] = useState(false);
  const [fieldReq, setFieldReq] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth, isError, isLoading } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    document.title = "Rodan + Fields® | Login";
    if(isAuth){
      navigate('/')
    }
  }, [isAuth, navigate]);

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
      if (res.type === LOGIN_USER_SUCCESS) {
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
    <>
      <Navbar />
      <Box w={["22rem", "25rem"]} m="auto">
        <Text
          textTransform="upperCase"
          textAlign="center"
          fontWeight="bold"
          mb="2rem"
          fontFamily="s"
          fontSize="4xl"
          mt="2rem"
        >
          Sign In
        </Text>
        <Box>
          {fieldReq ? (
            <Alert status="error">
              <AlertIcon />
              Field is required
            </Alert>
          ) : null}
          {isError ? (
            <Alert status="error" borderRadius="4">
              <AlertIcon />
              Invalid credentials
            </Alert>
          ) : null}

          <Text>Username</Text>
          <Input
            mb="4"
            {...InputStyle}
            type="text"
            name="username"
            onChange={(e) => handleLogin(e)}
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
              onChange={(e) => handleLogin(e)}
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
          mt="2rem"
          isLoading={isLoading && isLoading}
          colorScheme="#112"
          bg="#111"
          onClick={handleLoginUser}
          onKeyUp={handleLoginEnter}
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
        >
          <RouterLink to="/signup">Create new Account</RouterLink>
        </Button>
      </Box>
    </>
  );
};
export default Login;
