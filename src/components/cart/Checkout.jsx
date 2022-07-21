import { Box, Image ,Text, Input, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,} from '@chakra-ui/react'
import React from 'react'

const Checkout = () => {
  return (
    <Box >
           <Box marginLeft="40%" padding="18px" >
              <Image height="8px" src="https://www.rodanandfields.com/en-us/medias/rf-logo.svg?context=bWFzdGVyfGltYWdlc3w3MzczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2MC9oYWIvODgyMjE0NzE4NjcxOC5zdmd8YjNmMmU2YTg5MTM0NTMzM2Y2ODg2ZmRkZTJhNmY2OWZhYmYyYjk5NWQxODkxODFiYjVkY2MxY2NjOWRlMzA5OA"/>
          </Box>
          <Box border="0.5px solid black"></Box>

          {/* flex desgin */}

           <Box display="flex">
                  {/* 1 */}
                  <Box width="50%" margin="2%" paddingLeft="5%" paddingRight="5%">
                      <Box>
                          <Slider aria-label='slider-ex-1' defaultValue={30}>
                          <SliderTrack>
                          <SliderFilledTrack />
                           </SliderTrack> 
                           </Slider>
                      </Box>

                      <Box paddingTop="10px">
                        <label style={{textDecorationLine:"none", fontFamily:"sans-seif",color:"#3b3b3b" , fontWeight:"100"}}>Contact</label>
                        <input ></input>
                        <Box border="0.1px solid #3b3b3b"></Box>
                        <Text fontSize='10px'marginTop="8px"  fontWeight="400" color="black"  lineHeight="8px"> Where can we send your order receipt to?</Text>
                      </Box>

                      <Box paddingTop="15px">
                        <label style={{textDecorationLine:"none", fontFamily:"sans-seif",color:"#3b3b3b" , fontWeight:"100"}}>Shipping</label>
                        <input ></input>
                        <Box border="0.1px solid #3b3b3b"></Box>
                         </Box>

                      <Box paddingTop="15px">
                        <label style={{textDecorationLine:"none", fontFamily:"sans-seif" ,color:"#3b3b3b", fontWeight:"100"}}>Payment</label>
                        <input ></input>
                        <Box border="0.1px solid #3b3b3b"></Box>
                       
                      </Box>

                 </Box>
                 {/* 2  right half*/}
                 <Box border="1px solid black" width="45%" borderRadius="5px"  margin="%"  marginRight="6%" marginTop="50px">
                    <Box bgColor="#e4e4e4" height="40px" margin="0px">
                    <Text fontSize='10px'marginTop="8px" paddingLeft="1%" paddingRight="%" fontWeight="400" color="black"  lineHeight="8px">Order Summary</Text>
                    </Box>
                 </Box>
          </Box>
          
    </Box>
  )
}

export default Checkout
