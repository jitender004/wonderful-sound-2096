import React from "react";
import { Box } from "@chakra-ui/react";
import Baner from "../components/Baner";
import Navbar from "../components/Navbar";
import BestSellers from "../components/BestSellers";
import Skincares from "../components/Skincares";
const Home = () => {
  return (
    <Box>
      <Navbar />
      <Baner />
      <BestSellers />
      <Skincares />
    </Box>
  );
};

export default Home;
