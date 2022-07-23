import React from "react";
import { Box } from "@chakra-ui/react";
import Baner from "../components/Baner";
import Navbar from "../components/Navbar";
import BestSellers from "../components/BestSellers";
import Skincares from "../components/Skincares";
import Ads from "../components/Ads";
import Promotions from "../components/Promotions";
import { InstaFeed } from "../components/InstaFeed";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <Baner />
      <BestSellers />
      <Skincares />
      <Ads />
      <Promotions />
      <InstaFeed />
      <Footer />
    </Box>
  );
};

export default Home;
