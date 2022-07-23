import React from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
const Promotions = () => {
  return (
    <Box p="60px 30px" bg="#F8F8F8">
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" w="30%" gridGap="20px">
          <Image
            w="100%"
            src="https://www.rodanandfields.com/en-us/medias/DrImage-HP-USCA.jpg?context=bWFzdGVyfHJvb3R8MTU1NTk2fGltYWdlL2pwZWd8aGI5L2gxYS8xNTM1MjQ4MTM0OTY2Mi5qcGd8MDhhZTg4YmI3NzkwNjYyYmE3OGU5MjMwNGFlMTIxMDFjMDI5N2YyMjliOGZlNmMzYWFhNTg5MmM3YTRkNzY4Nw"
          />
          <Text
            textAlign="center"
            fontFamily="RFFONTROMAN"
            fontSize="24px"
            color="#222222"
          >
            Derm Inspired
          </Text>
          <Text textAlign="center" fontSize="16px">
            Dr. Katie Rodan + Dr. Kathy Fields founded R+F to give everyone
            access to life-changing skincare.
          </Text>
          <Link href="#" textAlign="center">
            <Text
              display="inline-block"
              borderBottom="1px solid black"
              fontSize="16px"
            >
              Meet Our Doctors
            </Text>
          </Link>
        </Flex>
        <Flex flexDirection="column" w="30%" gridGap="20px">
          <Image
            w="100%"
            src="https://www.rodanandfields.com/en-us/medias/Clinically-Tested-Card2.png?context=bWFzdGVyfHJvb3R8ODkyMTR8aW1hZ2UvcG5nfGhjNC9oOTAvMTQzNjc5Njg4MjEyNzgucG5nfGMwYmUyOTdlYzA0NjRjNWZjMTMzNTdmYmFlMTU4ZmY5ZWY4YTJkNDEyZWQ1YzM0Mjk2ZTg5MGQzMWY0MGNhZjQ"
          />
          <Text
            textAlign="center"
            fontFamily="RFFONTROMAN"
            fontSize="24px"
            color="#222222"
          >
            Clinically Tested
          </Text>
          <Text textAlign="center" fontSize="16px">
            Our innovative formulas are tested in our lab and designed to work
            together to deliver real results.
          </Text>
          <Link href="#" textAlign="center">
            <Text
              display="inline-block"
              borderBottom="1px solid black"
              fontSize="16px"
            >
              Discover Multi-Med Therapy
            </Text>
          </Link>
        </Flex>
        <Flex flexDirection="column" w="30%" gridGap="20px">
          <Image
            w="100%"
            src="https://www.rodanandfields.com/en-us/medias/Results-Guaranteed-Card3.png?context=bWFzdGVyfHJvb3R8OTM4NzB8aW1hZ2UvcG5nfGgxYy9oZDcvMTQzNjc5Njg4ODY4MTQucG5nfGM4MTI2NzNmNmFlMWE0YTU1M2YzNmY3NDYzMTU4YTk5YWI5YWU5MWJhYzIwY2MxMmU1ZDQzNWIzYTcwM2NkM2Q"
          />
          <Text
            textAlign="center"
            fontFamily="RFFONTROMAN"
            fontSize="24px"
            color="#222222"
          >
            Results Guaranteed
          </Text>
          <Text textAlign="center" fontSize="16px">
            See and feel the best skin of your life within 60 days or your money
            back. Even on empty bottles.
          </Text>
          <Link href="#" textAlign="center">
            <Text
              display="inline-block"
              borderBottom="1px solid black"
              fontSize="16px"
            >
              Our Money-Back Guarantee
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Promotions;
