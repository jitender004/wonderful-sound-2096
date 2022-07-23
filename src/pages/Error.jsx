import React, { useEffect } from "react";
import Navbar from "./../components/Navbar";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const Error = () => {
  useEffect(() => {
    document.title = "Error Page | Rodan + Fields®";
  }, []);

  return (
    <>
      <Navbar />
      <Box>
        <Image
          w="100%"
          src="https://www.rodanandfields.com/en-us/medias/21-404-Error-Page-image.jpg?context=bWFzdGVyfHJvb3R8MTM3Nzc0fGltYWdlL2pwZWd8aDBiL2hjNi8xNDE1OTY5NTY0MjY1NC5qcGd8ZmQ3ZTZkYzc2NDVmZmQ0NDY5ZTMyNDg3YmYxMGI2ZWM0MTE5M2U2N2Q1NTEyMDJkOThkMzIzYTIyMDM2MTllMA"
        />
        <Box mt="-48em" ml="58em">
          <Text fontWeight="bolder" lineHeight="5rem">
            OOPS! THIS PAGE DOES NOT EXIST.
          </Text>
          <Text lineHeight="5rem">
            Life-changing skincare is just a click away.
          </Text>
          <RouterLink to="/" style={{ color: "blue", fontWeight: "500" }}>
            VISIT OUR HOMPAGE
          </RouterLink>
        </Box>
      </Box>
    </>
  );
};
export default Error;
