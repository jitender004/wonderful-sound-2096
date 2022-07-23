import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import Skincares from "../Skincares";
const BlogSliderSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const source = [
    {
      id: 1,
      image:
        "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/07/rodan-fields-reverse-ingredients.jpg",
      heading: "𝙹𝚞𝚕𝚢 𝟷𝟸𝚝𝚑, 𝟸𝟶𝟸𝟸",
      text: "𝙷𝚘𝚠 𝚝𝚘 𝙴𝚟𝚎𝚗 𝚂𝚔𝚒𝚗 𝚃𝚘𝚗𝚎 𝚘𝚗 𝚈𝚘𝚞𝚛 𝙵𝚊𝚌𝚎",
    },
    {
      id: 2,
      image:
        "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/06/rodan-fields-soothe-rescue-mask-1.jpg",
      heading: "𝙹𝚞𝚕𝚢 𝟼𝚝𝚑, 𝟸𝟶𝟸𝟸",
      text: "𝙵𝚊𝚌𝚒𝚊𝚕 𝚁𝚎𝚍𝚗𝚎𝚜𝚜: 𝙲𝚊𝚞𝚜𝚎𝚜 𝚊𝚗𝚍 𝚃𝚛𝚎𝚊𝚝𝚖𝚎𝚗𝚝𝚜",
    },
    {
      id: 3,
      image:
        "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/05/Sun-Facts-Protection-Hack.jpg",
      heading: "𝙹𝚞𝚕𝚢 𝟽𝚝𝚑, 𝟸𝟶𝟸𝟸",
      text: "𝚂𝚞𝚗 𝙳𝚊𝚖𝚊𝚐𝚎 & 𝚝𝚑𝚎 𝙸𝚖𝚙𝚘𝚛𝚝𝚊𝚗𝚌𝚎 𝚘𝚏 𝚂𝚞𝚗𝚜𝚌𝚛𝚎𝚎𝚗",
    },
    {
      id: 4,
      image:
        "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/06/reverse-regimen.jpg",
      heading: "𝙹𝚞𝚕𝚢 𝟸𝟻𝚝𝚑, 𝟸𝟶𝟸𝟸",
      text: "𝙷𝚘𝚠 𝚈𝚘𝚞 𝙰𝚐𝚎 𝚒𝚜 𝚄𝚙 𝚃𝚘 𝚈𝚘𝚞!",
    },
    {
      id: 5,
      image:
        "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/06/Soothe-Regimen.jpg",
      heading: "𝙹𝚞𝚕𝚢 𝟽𝚝𝚑, 𝟸𝟶𝟸𝟸",
      text: "𝚁𝙴𝙳 𝙰𝙻𝙰𝚁𝙼: 𝚆𝚑𝚢 𝙸𝚜 𝙼𝚢 𝚂𝚔𝚒𝚗 𝚂𝚘 𝚂𝚎𝚗𝚜𝚒𝚝𝚒𝚟𝚎 𝙰𝚕𝚕 𝚘𝚏 𝚊 𝚂𝚞𝚍𝚍𝚎𝚗?",
    },
    {
      id: 6,
      image:
        "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/05/Face-Firming-Treatment-for-Under-Eye-Bags-Wrinkles.jpg",
      heading: "𝙹𝚞𝚕𝚢 𝟸𝟻𝚝𝚑, 𝟸𝟶𝟸𝟸",
      text: "𝚂𝚞𝚗 𝙳𝚊𝚖𝚊𝚐𝚎 & 𝚝𝚑𝚎 𝙸𝚖𝚙𝚘𝚛𝚝𝚊𝚗𝚌𝚎 𝚘𝚏 𝚂𝚞𝚗𝚜𝚌𝚛𝚎𝚎𝚗",
    },
    {
      id: 7,
      image:
        "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/06/Lip-Wrinkles-Causes-and-Treatment.jpg",
      heading: "𝙹𝚞𝚕𝚢 𝟿𝚝𝚑, 𝟸𝟶𝟸𝟸",
      text: "𝙷𝚘𝚠 𝚈𝚘𝚞 𝙰𝚐𝚎 𝚒𝚜 𝚄𝚙 𝚃𝚘 𝚈𝚘𝚞!",
    },
    {
      id: 8,
      image:
        "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/06/Tinted-Moisturizer-Vs-Foundation.jpg",
      heading: "𝙹𝚞𝚕𝚢 𝟽𝚝𝚑, 𝟸𝟶𝟸𝟸",
      text: "𝚂𝚞𝚗 𝙳𝚊𝚖𝚊𝚐𝚎 & 𝚝𝚑𝚎 𝙸𝚖𝚙𝚘𝚛𝚝𝚊𝚗𝚌𝚎 𝚘𝚏 𝚂𝚞𝚗𝚜𝚌𝚛𝚎𝚎𝚗",
    },
    {
      id: 9,
      image:
        "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/05/rodan-fields-total-rf-serum.jpg",
      heading: "𝙹𝚞𝚕𝚢 𝟿𝚝𝚑, 𝟸𝟶𝟸𝟸",
      text: "𝙷𝚘𝚠 𝚈𝚘𝚞 𝙰𝚐𝚎 𝚒𝚜 𝚄𝚙 𝚃𝚘 𝚈𝚘𝚞!",
    },
  ];
  return (
    <>
      <Box
        fontWeight={"light"}
        // margin="10px"
        textAlign={"center"}
        //   marginTop="100px"
        width={"80%"}
        margin="auto"

        //   border={"1px solid black"}
      >
        <Heading mt={"80px"} mb={"20px"} fontWeight="light">
          𝚂𝚔𝚒𝚗𝚌𝚊𝚛𝚎 𝙱𝚕𝚘𝚐 𝙿𝚘𝚜𝚝𝚜
        </Heading>
        <Box>
          <Slider {...settings}>
            {source.map((item) => {
              return (
                <Box
                  key={item.id}
                  // border={"1px solid grey"}
                  padding={"10px"}
                  marginTop="10px"
                >
                  <Image
                    objectFit="cover"
                    cursor={"pointer"}
                    paddingRight="30px"
                    borderRadius={"10px"}
                    //    boxSize={"xs"}
                    src={item.image}
                  ></Image>
                  <Text fontSize={"xs"} marginTop="10px">
                    {item.heading}
                  </Text>
                  <Text fontSize={"sm"} fontWeight="bold" mt={"10px"}>
                    {item.text}
                  </Text>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
      <Box margin={"auto"} marginTop={"100px"} width="100%">
        <Flex>
          <Image
            boxSize="lg"
            width="100%"
            objectFit="cover"
            src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/08/Mask_1100x1100-1024x1024.jpg"
          ></Image>
          <Center
            textjustify="left"
            // lineHeight={"1.2rem"}
            // textAlign={"center"}

            w="100%"
            bgColor={"whitesmoke"}
            // fontSize="sm"
          >
            <Box>
              <p>PRO TIPS</p>
              <Heading mt={"5"} fontSize="30px" width={"80%"} lineHeight="45px">
                𝙿𝚛𝚘 𝚃𝚒𝚙𝚜 𝚘𝚗 𝙷𝚘𝚠 𝚃𝚘 𝙰𝚟𝚘𝚒𝚍 𝙼𝚊𝚜𝚔𝚗𝚎
              </Heading>
              <Text
                fontSize="sm"
                mt={"5"}
                mb={"25px"}
                letterSpacing="2px"
                lineHeight={"1.2rem"}
                width="75%"
              >
                𝘔𝘈𝘚𝘒𝘕𝘌 𝘐𝘚 𝘙𝘌𝘈𝘓. 𝘏𝘌𝘙𝘌’𝘚 𝘞𝘏𝘈𝘛 𝘛𝘖 𝘋𝘖 𝘈𝘉𝘖𝘜𝘛 𝘛𝘏𝘖𝘚𝘌 𝘗𝘌𝘚𝘒𝘠 𝘊𝘏𝘐𝘕
                𝘗𝘐𝘔𝘗𝘓𝘌𝘚.
              </Text>
              <Link href="#" textDecoration={"underline"}>
                Read More
              </Link>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box>
        <Skincares />
      </Box>
      <Box margin={"auto"} marginTop={"100px"}>
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
              <Heading fontSize={"3xl"} lineHeight={"3rem"} letterSpacing="3px" margin={"auto"} width="80%" mb={"40px"}>
                𝐆𝐞𝐭 𝐄𝐧𝐞𝐫𝐠𝐢𝐳𝐞𝐝-𝐋𝐨𝐨𝐤𝐢𝐧𝐠 𝐒𝐤𝐢𝐧 𝐰𝐢𝐭𝐡 𝐓𝐨𝐭𝐚𝐥 𝐑𝐅 𝐒𝐞𝐫𝐮𝐦
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
          <Image
            boxSize="lg"
            width="100%"
            objectFit="cover"
            src="https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/11/Blog_TRFS-Get-Energized-Looking-Skin-image.jpg"
          ></Image>
        </Flex>
      </Box>
    </>
  );
};

export default BlogSliderSlick;
