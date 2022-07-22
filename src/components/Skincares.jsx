import React from "react";
import {
  Box,
  Heading,
  Grid,
  Image,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
const Skincares = () => {
  const skinCares = [
    {
      id: "1",
      image1:
        "https://www.rodanandfields.com/en-us/medias/Fine-Lines-Wrinkles-Card.jpg?context=bWFzdGVyfHJvb3R8NTgzMDF8aW1hZ2UvanBlZ3xoODYvaGY2LzEyODg5MTg4MjA0NTc0LmpwZ3wzYjIwYmU0ZWI3NWZkYjFmNzJjNjVmZWNhYmJmN2RlODdjYjFmNTU0ODZjZWE0YjQ5NWIzNWQzYmQyN2UxZjli",
      image2:
        "https://www.rodanandfields.com/en-us/medias/Category-Image-1.png?context=bWFzdGVyfHJvb3R8MzcxNDI1fGltYWdlL3BuZ3xoOGIvaDJiLzEzOTAwNTk3MTMzMzQyLnBuZ3w5NTMwMDY2NDkxOTRmNDI1Mjc5ZjIyOTYxYjUyZTFiNDkyNDZhODZmNTJlZmQ4ZjU4NzBmZjI2NzFiMzhmZTMy",
      title: "Fine Lines + Wrinkles",
    },
    {
      id: "2",
      image1:
        "https://www.rodanandfields.com/en-us/medias/Acne-Breakouts-Card.jpg?context=bWFzdGVyfHJvb3R8NjU4Mjd8aW1hZ2UvanBlZ3xoMTEvaDJhLzEyODg5MTg4MjcwMTEwLmpwZ3wxMTg2NjQ4NjM0Y2QyZDY4MDdmZDU4ZmI0ZDkxMTlhM2UxMDgyYTFkMGVkOWMzMTBkYzY3ZTJmNGEzNzVlZDhm",
      image2:
        "https://www.rodanandfields.com/en-us/medias/Category-Image-2.png?context=bWFzdGVyfHJvb3R8Mzg1Mjk1fGltYWdlL3BuZ3xoOGUvaGI2LzEzOTAwNTk3MTk4ODc4LnBuZ3xmYzY3MThiYTcyZTNiMjhjNTI4MGZjNTUxMTY5OTgwNjFhMWQzM2Y0ZWQyZjJjMTUwOGEwYjBmM2Y1NjVlMTI3",
      title: "Acne + Breakouts",
    },
    {
      id: "3",
      image1:
        "https://www.rodanandfields.com/en-us/medias/Uneven-Tone-Brown-Spots-Card.jpg?context=bWFzdGVyfHJvb3R8NTc4OTV8aW1hZ2UvanBlZ3xoY2UvaDY0LzEyODg5MTg4MzM1NjQ2LmpwZ3w0ZjUyN2U3MWE1YzYwNmNmYzgxZTQ3MTAxNmU3ZGIyNjA4NmU1MTQ2Mjc4NWU2NWRhOTFmNDU3NGRmNmI0MDFi",
      image2:
        "https://www.rodanandfields.com/en-us/medias/Category-Image-3.png?context=bWFzdGVyfHJvb3R8MzU2OTI0fGltYWdlL3BuZ3xoNDMvaGJkLzEzOTAwNTk3MjY0NDE0LnBuZ3xhMWMzNDBiMGI0MWJmNjkwMDk2NDc0NGMxMjc4ZjljYzMzODYyYTRmNGUyNjFiYjZlOWZhOWM4ZmUzYTFjZmYz",
      title: "Uneven Tone + Dark Spots",
    },
    {
      id: "4",
      image1:
        "https://www.rodanandfields.com/en-us/medias/Sensitivity-Visible-Redness-Card.jpg?context=bWFzdGVyfHJvb3R8NjE5MTd8aW1hZ2UvanBlZ3xoNTgvaGM3LzEyODg5MTg4NDAxMTgyLmpwZ3wwN2M4ZTJmMGExMDI1ZTM2MjE4M2I3MzFlZWI5NDJkZDYzZmMzMDdhMDMyNGFjODUyY2MwMWUzMDk5MDVjZWZk",
      image2:
        "https://www.rodanandfields.com/en-us/medias/Category-Image-4.png?context=bWFzdGVyfHJvb3R8MzEzMzg3fGltYWdlL3BuZ3xoYjIvaDMwLzEzOTAwNTk3MzI5OTUwLnBuZ3xlOGYwOTgwZmYxNWIzNGVhNjZiN2I1NGI0NWVmZTFhOGQwYmJlOGMzZjE5NzA4ODRjNjZlMzliZDAzZjVhNDk0",
      title: "Sensitivity + Visible Redness",
    },
    {
      id: "5",
      image1:
        "https://www.rodanandfields.com/en-us/medias/Dry-Skin-Card.jpg?context=bWFzdGVyfHJvb3R8NjY4Mjl8aW1hZ2UvanBlZ3xoZTkvaDJjLzEyODg5MTg4NDY2NzE4LmpwZ3w2M2M5MDI0YzI3ZTgyNDIxZmE0MTZmNGJiMWU5ZGZhZDM0NzQ3NmJhNDUxY2MyMTZjNjk4NDQ4NTAxMDk1MDNj",
      image2:
        "https://www.rodanandfields.com/en-us/medias/Category-Image-5.png?context=bWFzdGVyfHJvb3R8MjU0NDM1fGltYWdlL3BuZ3xoYjAvaGY4LzEzOTAwNTk3Mzk1NDg2LnBuZ3xlMmE5ZWIyN2YyYTVjZjZiZTVkZmUyZjJjODhmY2Q5MTdmMWM0NWQ1NTQ4MzFmZjM3YjUyNWI3M2NhYjI3ZTll",
      title: "Dry Skin",
    },
    {
      id: "6",
      image1:
        "https://www.rodanandfields.com/en-us/medias/Eyes-Lips-Lashes-Card.jpg?context=bWFzdGVyfHJvb3R8ODY2MjZ8aW1hZ2UvanBlZ3xoZjAvaGE2LzEyODg5MTg4NTMyMjU0LmpwZ3w2ZmNiOWQwNjJhNGZlYjViMjA2MDhiYTlmN2JlMDU2M2NkMmNlMzJjNzU5ZmQ5ZWQxZTRkZmEwZGY3MDBhNjgy",
      image2:
        "https://www.rodanandfields.com/en-us/medias/Category-Image-6.png?context=bWFzdGVyfHJvb3R8Mzc1MzQ5fGltYWdlL3BuZ3xoMjEvaDdiLzEzOTAwNTk3NDYxMDIyLnBuZ3xkNjNjZjczZWMzYzM4MDIyMjA1NzIwOTgwZDM0YTU4MGIzMmY1YmZlZGM2Y2I5ODdmZWU4NDEzMjAxOTgxZGY0",
      title: "Eyes,Lips + Lashes",
    },
  ];
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
        {skinCares.map((el) => {
          return (
            <Box bg="#FFFFFF" borderRadius="12px" overFlow="hidden" p="20px">
              <Box>
                <Image
                  borderRadius="12px"
                  overFlow="hidden"
                  w="200px"
                  onMouseOver={{ display: "none" }}
                  onMouseOut={{ display: "block" }}
                  src={el.image1}
                />
                <Image
                  w="250px"
                  display="none"
                  onMouseOver={{ display: "block" }}
                  src={el.image2}
                />
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
