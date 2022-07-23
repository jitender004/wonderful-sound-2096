import React, { useState, useEffect } from "react";
import {
  Input,
  Box,
  Flex,
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
import {
  ViewIcon,
  ViewOffIcon,
  SmallCloseIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { getUserRegistration } from "../../../Redux/AuthReducer/action.js";
import { REGISTER_USER_SUCCESS } from "../../../Redux/AuthReducer/action.type.js";
import Navbar from "./../../Navbar";
import { useNavigate, Link as RouterLink } from "react-router-dom";

const InputStyle = {
  focusBorderColor: "none",
};
const CheckIconStyle = {
  fontSize: "sm",
  bg: "green",
  color: "#fff",
  p: "0.5",
  borderRadius: "10",
};
const Signup = () => {
  const [user, setuser] = useState({});
  const [show, setShow] = useState(false);
  const [fieldReq, setFieldReq] = useState(false);
  const [errUser, setErrUser] = useState();
  const [passMatch, setPassMatch] = useState(true);
  const [charactor, setCharactor] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, isLoading } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    document.title = "Rodan + Fields® | Signup";
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

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
        return navigate("/login", { replace: true });
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
    let lengthOfPass = "";
    const { name, value } = e.target;
    if (name === "password") {
      lengthOfPass += value;
    }

    for (let i = 0; i < lengthOfPass?.length; i++) {
      if (lengthOfPass.length >= 8) {
        setCharactor({
          ...charactor,
          eight: true,
        });
        continue;
      }

      if (
        lengthOfPass[i] === "!" ||
        lengthOfPass[i] === "@" ||
        lengthOfPass[i] === "#" ||
        lengthOfPass[i] === "$"
      ) {
        setCharactor({
          ...charactor,
          symbol: value,
        });
        continue;
      }
      if (
        lengthOfPass[i] === "1" ||
        lengthOfPass[i] === "2" ||
        lengthOfPass[i] === "3" ||
        lengthOfPass[i] === "4" ||
        lengthOfPass[i] === "5" ||
        lengthOfPass[i] === "6" ||
        lengthOfPass[i] === "7" ||
        lengthOfPass[i] === "8" ||
        lengthOfPass[i] === "9" ||
        lengthOfPass[i] === "0"
      ) {
        setCharactor({
          ...charactor,
          numberOf: value,
        });
        continue;
      }
      let num = 25;
      let runcondition = true;
      let char = "abcdefghijklmnopqrstuvwxyz";
      while (0 <= num && runcondition === true) {
        if (char[num] === lengthOfPass[i]) {
          setCharactor({
            ...charactor,
            smallletter: value,
          });
          runcondition = false;
          continue;
        }
        num--;
      }
      let letterupper = true;
      num = 25;
      while (0 <= num && letterupper === true) {
        if (char[num].toUpperCase() === lengthOfPass[i]) {
          setCharactor({
            ...charactor,
            capitalletter: value,
          });
          letterupper = false;
          continue;
        }
        num--;
      }
    }

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
            mb="4"
            {...InputStyle}
            type="text"
            name="name"
            onChange={(e) => handleRegister(e)}
          />
          <Text>Username</Text>
          <Input
            mb="4"
            {...InputStyle}
            type="text"
            name="username"
            onChange={(e) => handleRegister(e)}
          />
          <Text>Email</Text>
          <Input
            mb="4"
            {...InputStyle}
            type="text"
            name="email"
            onChange={(e) => handleRegister(e)}
          />
          <Text>Mobile number</Text>

          <InputGroup mb="4">
            <InputLeftAddon children="+91" />
            <Input
              type="tel"
              maxLength="10"
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
              onChange={(e) => {
                handleRegister(e);
              }}
            />
          </InputGroup>
          <Flex gap="5" mt="2" mb="4">
            <Text fontSize="xs">
              {charactor?.eight ? (
                <CheckIcon {...CheckIconStyle} />
              ) : (
                <SmallCloseIcon {...CrossIconStyle} />
              )}{" "}
              8-64 Charactors
            </Text>

            <Text fontSize="xs">
              {charactor?.capitalletter ? (
                <CheckIcon {...CheckIconStyle} />
              ) : (
                <SmallCloseIcon {...CrossIconStyle} />
              )}{" "}
              ABC
            </Text>
            <Text fontSize="xs">
              {charactor?.smallletter ? (
                <CheckIcon {...CheckIconStyle} />
              ) : (
                <SmallCloseIcon {...CrossIconStyle} />
              )}{" "}
              abc
            </Text>
            <Text fontSize="xs">
              {charactor?.numberOf ? (
                <CheckIcon {...CheckIconStyle} />
              ) : (
                <SmallCloseIcon {...CrossIconStyle} />
              )}{" "}
              123
            </Text>
            <Text fontSize="xs">
              {charactor?.symbol ? (
                <CheckIcon {...CheckIconStyle} />
              ) : (
                <SmallCloseIcon {...CrossIconStyle} />
              )}{" "}
              !@#$
            </Text>
          </Flex>

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
          <RouterLink to="/login"> Sign In</RouterLink>
        </Button>
      </Box>
    </>
  );
};
export default Signup;

const CrossIconStyle = {
  fontSize: "sm",
  bg: "red",
  borderRadius: "10",
};
