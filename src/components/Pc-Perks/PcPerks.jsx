import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";

const PcPerks = () => {
  return (
    <>
      <Navbar />
      <VStack>
        <Box mb="1.5rem">
          <Text
            textAlign="center"
            color="#55565a"
            fontSize="3rem"
            fontWeight="200"
            fontFamily="'Poppins', sans-serif;"
            letterSpacing="normal"
            lineHeight="normal"
          >
            ℙℂ ℙ𝔼ℝ𝕂𝕊
          </Text>
        </Box>
        <Box width="80%">
          <Text
            fontSize="1rem"
            fontWeight={300}
            color="#222"
            lineHeight="1.2rem"
            letterSpacing=".5"
            textAlign="center"
            textjustify="inter-word"
            fontFamily="ProximaNovaRegular,Arial,Sans-Serif"
          >
            Save money, enjoy free shipping and get a free gift ($50+ retail
            price) with your 2nd order when you match with a Consultant and
            become a Preferred Customer (PC). All for a one-time fee of $19.95.
            Between discounts + free shipping, the membership pays for itself!
          </Text>
        </Box>
      </VStack>
      <Grid
        templateColumns="repeat(3,1fr)"
        width="90%"
        height="2xl"
        justifyContent={"center"}
        margin="auto"
        marginTop={"80px"}
        textAlign="center"
        gap=""
      >
        <GridItem h="250">
          <Box boxSize="sm">
            <Image
              margin={"auto"}
              boxSize="250px"
              objectFit="cover"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-01.jpg?context=bWFzdGVyfHJvb3R8MTAzOTV8aW1hZ2UvanBlZ3xoZWEvaGU1LzExMDA0MzY2NzE2OTU4LmpwZ3xkOTYyNTBmYjVmNDkwYzNhNDJiMDljMTU2OTFkZWZiZTkwNTMwOWUyMDZhZjE1YjU2MGJmYjVkYzZmYzkwMWFk"
              alt="Dan Abramov"
            />
            <h2>10% OFF</h2>
            <Text fontSize="xs">
              Get 10% off every order, starting with your first
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="200" bg="">
          <Box boxSize="sm">
            <Image
              margin={"auto"}
              boxSize="250px"
              objectFit="cover"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-02.jpg?context=bWFzdGVyfHJvb3R8OTMwOHxpbWFnZS9qcGVnfGhmZC9oMGMvMTEwMDQzNjY3ODI0OTQuanBnfDdmMzUyNGIxZDAwMjkxNmNiNjJmYWUwYzA2NjllNDFlNTNhYTMyYzBiYjA3ZjFlNWIwNGYwY2Q3NDFiMjBkOGM"
              alt="Dan Abramov"
            />
            <h2>FREE SHIPPING</h2>
            <Text fontSize="xs">Get free shipping on orders $80+</Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="200" bg="">
          <Box boxSize="sm">
            <Image
              margin={"auto"}
              boxSize="250px"
              objectFit="cover"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-03.jpg?context=bWFzdGVyfHJvb3R8MTIyMDF8aW1hZ2UvanBlZ3xoZTIvaDViLzExMDA0MzY2ODQ4MDMwLmpwZ3w5ZDA3ZWMzY2I4YWFlZGRhNDM1YWRjNzlmODQ4OGFhNmJkMTA3NWMzMTI5OWMwNjQ5MGE3MjZhNGM1MDY5ZTli"
              alt="Dan Abramov"
            />
            <h2>FREE PERKS PRESENT</h2>
            <Text fontSize="xs">
              Get a free gift ($50+ retail price) with your 2nd order placed
              30-90 days after enrollment
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="200" bg="">
          <Box boxSize="sm">
            <Image
              margin={"auto"}
              boxSize="250px"
              objectFit="cover"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-04. fonct fontSize='sm'jpg?context=bWFzdGVyfHJvb3R8MTI1MDl8aW1hZ2UvanBlZ3xoZjMvaGQ3LzExMDA0MzY2OTEzNTY2LmpwZ3xkMWRmNjQ0MDhmMTg3ZThlZmE3OWNjMmQ3YjQ3ODY3NWIzYmJiNmI1ZGQ5ZGQxODFkYWU3ZmYwZjkyMmQ0ZjA0"
              alt="Dan Abramov"
            />
            <h2>OFFERS + REWARDS</h2>
            <Text fontSize="xs">
              Get exclusive access to personalized offers + rewards
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="200" bg="">
          <Box boxSize="sm">
            <Image
              margin={"auto"}
              boxSize="250px"
              objectFit="cover"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-05.jpg?context=bWFzdGVyfHJvb3R8MTAwNzl8aW1hZ2UvanBlZ3xoOWEvaGVkLzExMDA0MzY2OTc5MTAyLmpwZ3xiNDQ3NjE1NWIwMDY1MTI1N2RjMjk0Y2FhNTYxMDk1N2M4YjA2MjA1OTgwZTcyMTg3Y2E0ODM5Y2NlN2M0MjE4"
              fontSize="xs"
              alt="Dan Abramov"
            />
            <h2 fontSize="xs">FLEX SUBSCRIPTION</h2>
            <Text fontSize="xs">
              Get convenient delivery of your subscription cart every 60 days.
              Adjust or cancel any time.
            </Text>
          </Box>
        </GridItem>
        <GridItem w="100%" h="200" bg="">
          <Box boxSize="sm">
            <Image
              margin={"auto"}
              boxSize="250px"
              objectFit="cover"
              src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-06.jpg?context=bWFzdGVyfHJvb3R8MTIwNzh8aW1hZ2UvanBlZ3xoNDcvaDgyLzExMDA0MzY3MDQ0NjM4LmpwZ3wxZDZlYzA0MTc3M2I4OWY2NDU5NTZkMTA5ZGNkYTFkODRhOWZlM2FmOTQ3YTEyNzgyNjhkYzI5YWJjODE1M2Zj"
              alt="Dan Abramov"
            />
            <h2>CONSULTANT</h2>
            <Text fontSize="xs">
              Get personalized recommendations, advice, help & more
            </Text>
          </Box>
        </GridItem>
      </Grid>
      <Box margin={"auto"} marginTop={"100px"} width="90%">
        <Flex>
          <Image
            boxSize="lg"
            width="100%"
            objectFit="cover"
            src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-07.jpg?context=bWFzdGVyfHJvb3R8MTgxNzV8aW1hZ2UvanBlZ3xoZTgvaDE0LzExMDA0MzY2NDU0ODE0LmpwZ3xkZTk5NGI5MmEyMzZkNTZkNWVmY2I1OGIzMjZlMmMwOTU4MTQ2ZWMxOTc4YTUwMTdiMWU5NmNlMWQ3NzFlOWRi"
          ></Image>
          <Center
            textjustify="center"
            lineHeight={"1.2rem"}
            textAlign={"center"}
            w="100%"
            bgColor={"whitesmoke"}
            fontSize="sm"
          >
            <Box>
              <Heading fontSize={"2xl"} letterSpacing="3px" mb={"40px"}>
                𝘏𝘖𝘞 𝘛𝘖 𝘌𝘕𝘙𝘖𝘓𝘓
              </Heading>
              <Text fontSize="sm" mb={"25px"} width="80%" margin="auto">
                Add the products you want to your cart and check the PC Perks
                box in your shopping bag to opt in on any order $80+
              </Text>
              <Button mt={"20px"} colorScheme={"black"} variant="outline">
                SHOP NOW
              </Button>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box margin={"auto"} width="90%">
        <Flex>
          <Center
            textjustify="center"
            lineHeight={"1.2rem"}
            textAlign={"center"}
            w="100%"
            bgColor={"whitesmoke"}
          >
            <Box>
              <Heading fontSize={"2xl"}>𝙿𝙲𝚂 𝙻𝙾𝚅𝙴 𝚃𝙷𝙴 𝙿𝙴𝚁𝙺𝚂</Heading>
              <Text fontSize="sm" mt={"35px"} width="88%">
                “My consultant makes me feel remembered and appreciated! –
                Brianna
              </Text>
            </Box>
          </Center>
          <Image
            boxSize="lg"
            width="100%"
            objectFit="cover"
            src="https://www.rodanandfields.com/en-us/medias/21-June-PC-Perks-Consultant-Image.jpg?context=bWFzdGVyfHJvb3R8MTIwNTk2fGltYWdlL2pwZWd8aGM2L2gwNi8xMzI0Mjk2MDE1MDU1OC5qcGd8MWJiNGQzMzlkNjJkMWJjNDljYmVhZThjNjM3YjZmNWFlY2YyNGY1YTM0NWUwMWRmMzRiZTgxMTRkMWFlNDQ2Zg"
          ></Image>
        </Flex>
      </Box>
      <Box margin={"auto"} width="90%">
        <Flex>
          <Image
            boxSize="lg"
            width="100%"
            objectFit="cover"
            src="https://www.rodanandfields.com/en-us/medias/21-PC-Perks-Redefine-09.jpg?context=bWFzdGVyfHJvb3R8MzI4Nzd8aW1hZ2UvanBlZ3xoYTIvaDljLzEyNzgwOTE4NjM2NTc0LmpwZ3w5OGIwOWZkMTZhNGE1ZWJiMWYyZmRiYjMzZjJkYjI1NjAxMDdhY2UzMGRkNjE1NjZjZmQ5OTJmYTQ4NWExZjBi"
          ></Image>
          <Center
            textjustify="center"
            lineHeight={"1.2rem"}
            textAlign={"center"}
            w="100%"
            bgColor={"whitesmoke"}
            fontSize="sm"
          >
            <Box>
              <Heading fontSize={"2xl"} letterSpacing="3px" mb={"40px"}>
                𝙿𝙲𝚂 𝙻𝙾𝚅𝙴 𝚃𝙷𝙴 𝙿𝙴𝚁𝙺𝚂
              </Heading>
              <Text fontSize="sm" mb={"40px"} width="93%" margin="auto">
                “It's flexible. So, I'm not locked into buying something every
                month if I don't need it.”
              </Text>
              <Text fontSize="sm" mt={"10px"}>
                – Sherry
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box margin={"auto"} width="90%">
        <Flex>
          <Center
            textjustify="center"
            lineHeight={"1.2rem"}
            textAlign={"center"}
            w="100%"
            bgColor={"whitesmoke"}
            fontSize="sm"
          >
            <Box>
              <Heading fontSize={"2xl"}>𝙿𝙲𝚂 𝙻𝙾𝚅𝙴 𝚃𝙷𝙴 𝙿𝙴𝚁𝙺𝚂</Heading>
              <Text fontSize="sm" mt={"35px"} width="99%">
                “I find out about new products first, get 10% off everything and
                get free shipping!!”
              </Text>
              <Text fontSize="sm" mt={"8px"}>
                – Jessica
              </Text>
            </Box>
          </Center>
          <Image
            boxSize="lg"
            width="100%"
            objectFit="cover"
            src="https://www.rodanandfields.com/en-us/medias/20-PC-Perks-LP-Desktop-US-10.jpg?context=bWFzdGVyfHJvb3R8MTUzMzU5fGltYWdlL2pwZWd8aDA5L2g1Ny8xMTAwNDM2NjY1MTQyMi5qcGd8Yjk4MWNlMzg5ZjYzN2ViMGMyY2RmZTk3ODZkNTBjNzJiOTkxNjAzNjU1ZmIyZDk5ZGVhZTcyMjkzOWJkMzg2Nw"
          ></Image>
        </Flex>
      </Box>
      <Box
        width={"90%"}
        height={"250px"}
        margin="auto"
        textAlign={"center"}
        display="flex"
        alignItems="center"
        mt={"60px"}
      >
        <VStack
          justifyContent={"center"}
          width={"70%"}
          height={"150px"}
          margin="auto"
        >
          <Heading
            alignItems="center"
            fontSize="2xl"
            mb={"40px"}
            letterSpacing={"2px"}
          >
            𝙰𝙻𝚁𝙴𝙰𝙳𝚈 𝙰 𝙲𝚄𝚂𝚃𝙾𝙼𝙴𝚁?
          </Heading>
          <Text fontSize="sm">
            If you’re an R+F Customer and want to upgrade to PC Perks, simply
            enroll in your cart at checkout on your next order.
          </Text>

          <Link
            fontSize={"sm"}
            textDecoration="underline"
            color="blue"
            href="#"
          >
            PC Perks Terms & Conditions
          </Link>
        </VStack>
      </Box>
      <Box width={"90%"} margin="auto">
        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      WHAT IS A PC? ​​​​​​
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="sm">
                  “PC” stands for Preferred Customer. When you join the Rodan +
                  Fields PC Perks program, you become a PC, or a Preferred
                  Customer.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      WHAT IS THE PC PERKS PROGRAM?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="sm">
                  PC Perks is a subscription program that offers a 10% discount
                  on all orders, free shipping on orders of $80 or more (after
                  applying the 10% PC discount), a Perks Present, and deliveries
                  every 60 days with the flexibility to change future products
                  and shipment dates in your account settings. PC Perks members
                  also gain access to exclusive offers, promotions, a priority
                  Customer Service line and receive a 60-day Satisfaction
                  Guarantee on all products. You can join PC Perks for a
                  one-time fee of $19.95 with a minimum subscription order of
                  $80 or more.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      HOW DO I ENROLL IN THE PC PERKS PROGRAM? ​​​​​
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontFamily=" Helvetica, Arial, sans-serif"
                  fontSize="sm"
                >
                  You may enroll in PC Perks through a Consultant’s Personal
                  Website or through the R+F website at the time of checkout for
                  a one-time, non-refundable $19.95 enrollment fee. Your initial
                  subscription order must total a minimum of $80, after the 10%
                  PC Perks discount is applied, and you’ll be asked to provide
                  the required enrollment information, including a valid credit
                  card.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      HOW DO I UPGRADE TO A PC PERKS ACCOUNT?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  If you are an existing Customer and would like to upgrade to
                  Preferred Customer status, simply enroll in your cart at
                  checkout on your next order
                </AccordionPanel>
              </>
            )}
          </AccordionItem>{" "}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      HOW DOES FREE SHIPPING WORK IN THE PC PERKS PROGRAM?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  For Preferred Customers, shipping is free on all orders of $80
                  or more, after the 10% PC Perks discount is applied. When you
                  log in to the R+F website or your Consultant’s Personal
                  Website, you will identify yourself as a PC by entering your
                  email address and the password that you selected when
                  enrolling in PC Perks. Then you can view and access the PC
                  pricing and receive free shipping on all orders of $80 or
                  more, whether it is a subscription order or a one-time order.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>{" "}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      DO I HAVE TO CHOOSE A CONSULTANT WHEN I ENROLL AS A
                      PREFERRED CUSTOMER?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  Yes, you must choose a Consultant at checkout when you enroll
                  in the PC Perks program. Your Consultant can answer questions
                  you have about PC Perks, offer personalized skincare
                  recommendations and more.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>{" "}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      WHAT IF I DON’T KNOW A CONSULTANT?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  If you don’t know any Consultants, we’ll provide the names of
                  a few at checkout who you can choose from based on various
                  factors such as your location.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>{" "}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      WHAT IS THE PREFERRED CUSTOMER PRICE?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  The Preferred Customer price includes a 10% discount on all
                  R+F products. It is an exclusive benefit only available
                  through the PC Perks program. The PC Price will reflect in
                  your cart for all orders. Your initial subscription order will
                  reflect the discount after you add PC Perks to your cart at a
                  one-time fee of $19.95
                </AccordionPanel>
              </>
            )}
          </AccordionItem>{" "}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      DO PC PERKS MEMBERS AUTOMATICALLY RECEIVE THE PREFERRED
                      CUSTOMER PRICE?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  Yes. Once your PC Perks account has been established, all
                  orders placed through your account, whether a subscription
                  order or a one-time order, qualify for Preferred Customer
                  pricing.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      WHAT IS A PERKS PRESENT?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  U.S. Preferred Customers receive a Perks Present when you
                  place your second order, totaling $80 or more at the PC price,
                  when placed 30-90 days after your enrollment date. The Perks
                  Present is a free Rodan + Fields product ($50+ retail price)
                  and will automatically be added to your cart once you meet the
                  qualifying threshold amount. Product may vary.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      CAN I GET MORE THAN ONE PERKS PRESENT?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  No, we only offer one Perks Present per Preferred Customer.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      WHEN AM I ELIGIBLE FOR THE PERKS PRESENT?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  You can qualify for your Perks Present 30 days after you
                  enroll as a U.S. Preferred Customer. If you place an order of
                  $80+ at the PC price (after the 10% discount) between 30-90
                  days of your enrollment date, a Perks Present will
                  automatically be added to your cart when your cart meets the
                  qualifing threshold of $80 at the PC price. This offer is
                  available for PCs who enroll on or after June 16, 2020. See
                  <Link color={"blue"} textDecoration="underline">
                    Terms & Conditions
                  </Link>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>{" "}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      IF I RETURN MY QUALIFYING ORDER, DO I HAVE TO RETURN THE
                      PERKS GIFT?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  Yes, we request that you include the free product with your
                  returned order.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      AM I ABLE TO EXCHANGE MY PERKS PRESENT?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  No, the Perks Present varies depending on inventory and may
                  change at the discretion of R+F.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      letterSpacing="0.5px"
                      fontFamily={"-moz-initial"}
                      fontSize="sm"
                    >
                      HOW DO I MANAGE MY PREFERRED CUSTOMER ACCOUNT?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fonct fontSize="sm">
                  As a Preferred Customer, you will be identified by your email
                  address and the password you selected when you enrolled in PC
                  Perks. Upon entering the R+F website or your Consultant’s
                  Personal Website, you must log in to identify yourself as a PC
                  in order to view and access the PC pricing, or to update your
                  order, billing or other information on file with R+F.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default PcPerks;
