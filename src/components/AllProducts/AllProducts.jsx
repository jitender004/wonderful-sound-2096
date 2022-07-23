import { Box ,Grid} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { SideBar } from "../SideBar/SideBar";

const AllProducts = ()=>{

    const [data2, setData2] = useState([]);

    useEffect( ()=>{
        axios({
          url:"https://rodan-field.herokuapp.com/api/products",
          method: "GET"
        })
        .then(res=>{
          setData2(res.data);
        })
        .catch(err=>{
          console.log(err);
        })
      },[setData2]);
    

   console.log(data2)
    return(
        <>
        <Box display={"flex"}>
        <SideBar/>
        <Box paddingLeft={"60px"} paddingRight={"60px"}>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
         <ProductCard products={data2}/>
        </Grid>
        </Box>
      </Box>
        </>
    )
}

export {AllProducts};