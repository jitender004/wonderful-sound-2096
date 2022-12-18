import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/appReducer/action";
import Navbar from "../Navbar";
import { ProductCard } from "../ProductCard/ProductCard";
import { SideBar } from "../SideBar/SideBar";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { product, isLoading, cart } = useSelector((state) => state.products);
  useEffect(() => {
    if (product?.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box display={"flex"} paddingTop={"50px"}>
        <SideBar />
        <Box paddingLeft={"60px"} paddingRight={"60px"}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <ProductCard products={product} isLoading={isLoading} cart={cart} />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export { AllProducts };
