import React, { useState } from "react";
import {
  Box,
  Heading,
  Grid,
  Image,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
const skinCares = [
  {
    id: "1",
    images: [
      {
        id: 11,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Fine-Lines-Wrinkles-Card.jpg?context=bWFzdGVyfHJvb3R8NTgzMDF8aW1hZ2UvanBlZ3xoODYvaGY2LzEyODg5MTg4MjA0NTc0LmpwZ3wzYjIwYmU0ZWI3NWZkYjFmNzJjNjVmZWNhYmJmN2RlODdjYjFmNTU0ODZjZWE0YjQ5NWIzNWQzYmQyN2UxZjli",
        status: true,
      },
      {
        id: 12,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Category-Image-1.png?context=bWFzdGVyfHJvb3R8MzcxNDI1fGltYWdlL3BuZ3xoOGIvaDJiLzEzOTAwNTk3MTMzMzQyLnBuZ3w5NTMwMDY2NDkxOTRmNDI1Mjc5ZjIyOTYxYjUyZTFiNDkyNDZhODZmNTJlZmQ4ZjU4NzBmZjI2NzFiMzhmZTMy",
        status: false,
      },
    ],
    title: "Fine Lines + Wrinkles",
  },
  {
    id: "2",
    images: [
      {
        id: 21,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Acne-Breakouts-Card.jpg?context=bWFzdGVyfHJvb3R8NjU4Mjd8aW1hZ2UvanBlZ3xoMTEvaDJhLzEyODg5MTg4MjcwMTEwLmpwZ3wxMTg2NjQ4NjM0Y2QyZDY4MDdmZDU4ZmI0ZDkxMTlhM2UxMDgyYTFkMGVkOWMzMTBkYzY3ZTJmNGEzNzVlZDhm",
        status: true,
      },
      {
        id: 22,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Category-Image-2.png?context=bWFzdGVyfHJvb3R8Mzg1Mjk1fGltYWdlL3BuZ3xoOGUvaGI2LzEzOTAwNTk3MTk4ODc4LnBuZ3xmYzY3MThiYTcyZTNiMjhjNTI4MGZjNTUxMTY5OTgwNjFhMWQzM2Y0ZWQyZjJjMTUwOGEwYjBmM2Y1NjVlMTI3",
        status: false,
      },
    ],
    title: "Acne + Breakouts",
  },
  {
    id: "3",
    images: [
      {
        id: 31,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Uneven-Tone-Brown-Spots-Card.jpg?context=bWFzdGVyfHJvb3R8NTc4OTV8aW1hZ2UvanBlZ3xoY2UvaDY0LzEyODg5MTg4MzM1NjQ2LmpwZ3w0ZjUyN2U3MWE1YzYwNmNmYzgxZTQ3MTAxNmU3ZGIyNjA4NmU1MTQ2Mjc4NWU2NWRhOTFmNDU3NGRmNmI0MDFi",
        status: true,
      },
      {
        id: 32,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Category-Image-3.png?context=bWFzdGVyfHJvb3R8MzU2OTI0fGltYWdlL3BuZ3xoNDMvaGJkLzEzOTAwNTk3MjY0NDE0LnBuZ3xhMWMzNDBiMGI0MWJmNjkwMDk2NDc0NGMxMjc4ZjljYzMzODYyYTRmNGUyNjFiYjZlOWZhOWM4ZmUzYTFjZmYz",
        status: false,
      },
    ],
    title: "Uneven Tone + Dark Spots",
  },
  {
    id: "4",
    images: [
      {
        id: 41,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Sensitivity-Visible-Redness-Card.jpg?context=bWFzdGVyfHJvb3R8NjE5MTd8aW1hZ2UvanBlZ3xoNTgvaGM3LzEyODg5MTg4NDAxMTgyLmpwZ3wwN2M4ZTJmMGExMDI1ZTM2MjE4M2I3MzFlZWI5NDJkZDYzZmMzMDdhMDMyNGFjODUyY2MwMWUzMDk5MDVjZWZk",
        status: true,
      },
      {
        id: 42,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Category-Image-4.png?context=bWFzdGVyfHJvb3R8MzEzMzg3fGltYWdlL3BuZ3xoYjIvaDMwLzEzOTAwNTk3MzI5OTUwLnBuZ3xlOGYwOTgwZmYxNWIzNGVhNjZiN2I1NGI0NWVmZTFhOGQwYmJlOGMzZjE5NzA4ODRjNjZlMzliZDAzZjVhNDk0",
        status: false,
      },
    ],
    title: "Sensitivity + Visible Redness",
  },
  {
    id: "5",
    images: [
      {
        id: 51,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Dry-Skin-Card.jpg?context=bWFzdGVyfHJvb3R8NjY4Mjl8aW1hZ2UvanBlZ3xoZTkvaDJjLzEyODg5MTg4NDY2NzE4LmpwZ3w2M2M5MDI0YzI3ZTgyNDIxZmE0MTZmNGJiMWU5ZGZhZDM0NzQ3NmJhNDUxY2MyMTZjNjk4NDQ4NTAxMDk1MDNj",
        status: true,
      },
      {
        id: 52,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Category-Image-5.png?context=bWFzdGVyfHJvb3R8MjU0NDM1fGltYWdlL3BuZ3xoYjAvaGY4LzEzOTAwNTk3Mzk1NDg2LnBuZ3xlMmE5ZWIyN2YyYTVjZjZiZTVkZmUyZjJjODhmY2Q5MTdmMWM0NWQ1NTQ4MzFmZjM3YjUyNWI3M2NhYjI3ZTll",
        status: false,
      },
    ],
    title: "Dry Skin",
  },
  {
    id: "6",
    images: [
      {
        id: 61,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Eyes-Lips-Lashes-Card.jpg?context=bWFzdGVyfHJvb3R8ODY2MjZ8aW1hZ2UvanBlZ3xoZjAvaGE2LzEyODg5MTg4NTMyMjU0LmpwZ3w2ZmNiOWQwNjJhNGZlYjViMjA2MDhiYTlmN2JlMDU2M2NkMmNlMzJjNzU5ZmQ5ZWQxZTRkZmEwZGY3MDBhNjgy",
        status: true,
      },
      {
        id: 62,
        img_url:
          "https://www.rodanandfields.com/en-us/medias/Category-Image-6.png?context=bWFzdGVyfHJvb3R8Mzc1MzQ5fGltYWdlL3BuZ3xoMjEvaDdiLzEzOTAwNTk3NDYxMDIyLnBuZ3xkNjNjZjczZWMzYzM4MDIyMjA1NzIwOTgwZDM0YTU4MGIzMmY1YmZlZGM2Y2I5ODdmZWU4NDEzMjAxOTgxZGY0",
        status: false,
      },
    ],
    title: "Eyes,Lips + Lashes",
  },
];
const Skincares = () => {
  const [data, setData] = useState(skinCares);
  const [over, setOver] = useState(false);
  const [out, setOut] = useState(true);
  const handleMouseOver = (index) => {
    if (over) {
      return;
    }
    data[index].images[0].status = !data[index].images[0].status;
    data[index].images[1].status = !data[index].images[1].status;
    setOver(true);
    setOut(false);
    setData([...data]);
  };

  const handleMouseOut = (index) => {
    if (out) {
      return;
    }
    setOut(true);
    setOver(false);
    data[index].images[0].status = !data[index].images[0].status;
    data[index].images[1].status = !data[index].images[1].status;
    setData([...data]);
  };

  return (
    <Box maxWidth="1360px" m="auto" bg="#F8F4F2" px="20px">
      <Text
        fontFamily="RFFONTROMAN"
        fontSize="40px"
        fontWeight="normal"
        color="#222222"
        textAlign="center"
        pt="60px"
      >
        Derm Inspired Skincare for <i>Every</i> Concern
      </Text>
      <Grid templateColumns="repeat(6, 1fr)" gap={5} mt="40px">
        {data.map((el, index) => {
          return (
            <Box
              key={el.id}
              bg="#FFFFFF"
              borderRadius="12px"
              overflow="hidden"
              p="20px"
            >
              <Box>
                {el.images.map((img) => {
                  if (img.status) {
                    return (
                      <Image
                        cursor={"pointer"}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseOut={() => handleMouseOut(index)}
                        src={img.img_url}
                      />
                    );
                  }
                })}
              </Box>
              <Box
                textAlign="center"
                color="#222222"
                fontWeight="600"
                fontSize="18px"
                pt="30px"
              >
                {el.title}
              </Box>
            </Box>
          );
        })}
      </Grid>
      <Flex justifyContent="center" pt="50px" pb="50px">
        <Button
          w="25%"
          m="auto"
          pys="15px"
          color="#222222"
          border="1px solid black"
          bg="#FFFFFF"
        >
          Shop All Products
        </Button>
      </Flex>
    </Box>
  );
};

export default Skincares;
