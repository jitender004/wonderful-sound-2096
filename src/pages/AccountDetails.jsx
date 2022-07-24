import React, { useEffect } from "react";
import Navbar from "./../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../utils/LocalStorage";
import { getUserDetails, logoutFun } from "./../Redux/AuthReducer/action";
import {
  Table,
  Box,
  Text,
  Thead,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
} from "@chakra-ui/react";

const AccountDetails = () => {
  const dispatch = useDispatch();
  const { isAuth, userData } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (isAuth) {
      dispatch(getUserDetails(loadData("usename")));
      document.title="Rodan + Fields® | Account"
    }
  }, [dispatch, isAuth]);

  const handleLogout = () => {
    dispatch(logoutFun());
  };
  return (
    <>
      <Navbar />
      <Box w="50%" m="auto" mt="5rem">
        <Text textAlign="center" fontWeight="bolder" fontSize="5xl">
          WELCOME {userData?.name}
        </Text>
        <TableContainer fontSize="1xl" fontWeight="bold">
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>username:</Th>
                <Td>{userData.username}</Td>
              </Tr>
              <Tr>
                <Th>email:</Th>
                <Td>{userData.email}</Td>
              </Tr>
              <Tr>
                <Th>mobile:</Th>
                <Td>{userData.mobile}</Td>
              </Tr>
              <Tr>
                <Th>token:</Th>
                <Td>{userData.token}</Td>
              </Tr>
            </Thead>
          </Table>
        </TableContainer>
        <Box textAlign="center" mt="2rem">
          <Button colorScheme="red" onClick={() => handleLogout()}>
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default AccountDetails;
