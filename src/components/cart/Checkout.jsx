import { Box, Image ,Text, Input, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,Button,HStack,
    SliderMark,} from '@chakra-ui/react'
 import { ExternalLinkIcon,DeleteIcon } from '@chakra-ui/icons'
import React from 'react'

const Checkout = () => {
   const alertFun=()=>{
      alert("Your order Has been Placed")
   }
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
                      <Button onClick={alertFun} height="30px" borderRadius="5px" marginTop="15px"  border="1px solid black" width="100%" bg="black">
                                        <Text fontSize='10px'  fontWeight="500" color="white"   padding="5px" paddingTop="0px" lineHeight="18px">SECURE CHECKOUT</Text>
                                        
                           </Button>

                 </Box>
                 {/* 2  right half*/}
                 <Box border="1px solid grey" width="45%" borderRadius="5px"  margin="%"  marginRight="6%" marginTop="50px">
                    <Box bgColor="#e4e4e4" height="40px" margin="0px"  borderRadius="5px" paddingTop="10px">
                        <Text fontSize='10px'marginTop="8px" paddingLeft="1%" paddingRight="%" fontWeight="400" color="black"  lineHeight="8px">Order Summary</Text>
                    </Box>
                    <Box>
                         <HStack   height="98px"  >
                                   <Box boxSize='50px'>
                                       <Image src='https://www.rodanandfields.com/en-us/medias/ENHLSH01-458x458.jpg?context=bWFzdGVyfGltYWdlc3w0MDkxfGltYWdlL2pwZWd8aW1hZ2VzL2gzNS9oODgvMTM5Nzc1NDQ2ODc2NDYuanBnfDlmYTEwMTFkMjFiNzMwYjlhNjU0NTNiYjU5ZDBmMGY3ZWIzNmNiZmYwMTJhMGYzMTFkMzA1ODhkOGI1MjdlMmE' alt='Dan Abramov' />
                                   </Box>
                                     <Box >
                                        <Text fontSize='10px'  fontWeight="400" color="black" textAlign="left" padding="5px"  lineHeight="5px"> TOTAL RF SERUM</Text>
                                         <Box >
                                         <Text fontSize='10px'  fontWeight="350" color="black" textAlign="left" padding="5px"  lineHeight="5px"> Qty: 1</Text>
                                         </Box>
                                     </Box>

                                     <Box justifyContent="right" textAlign="right" paddingLeft="45%">                                        
                                          <Text fontSize='10px'  fontWeight="400" color="black"  padding="5px"  lineHeight="5px"> $350.00</Text>
                                     </Box>
                            </HStack>
                    </Box>
                    <Box border="0.1px solid #e4e4e4 " margin="10px"></Box>
  {/* sub total flex */}
                    <Box display="flex" justifyContent="space-between" padding="10px">
                       <Text fontSize='10px'  fontWeight="400" color="black"    lineHeight="5px"> Subtotal</Text>
                       <Text fontSize='10px'  fontWeight="400" color="black"    lineHeight="5px">$350.00</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between" padding="10px">
                       <Text fontSize='10px'  fontWeight="400" color="black"    lineHeight="5px"> Estimated Tax</Text>
                       <Text fontSize='10px'  fontWeight="400" color="black"    lineHeight="5px">--</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between" padding="10px">
                       <Text fontSize='10px'  fontWeight="400" color="black"    lineHeight="5px"> Shipping</Text>
                       <Text fontSize='10px'  fontWeight="400" color="black"    lineHeight="5px">--</Text>
                    </Box>

                    <Box border="0.1px solid #e4e4e4 " margin="10px"></Box>
                    
                    <Box display="flex" justifyContent="space-between" padding="10px">
                       <Text fontSize='12px'  fontWeight="500" color="black"    lineHeight="5px">TOTAL (1 Items)</Text>
                       <Text fontSize='12px'  fontWeight="400" color="black"    lineHeight="5px">$350.00</Text>
                    </Box>
                     
                 </Box>
          </Box>
          <br/><br/>
          <Box border="0.1px solid #e4e4e4 "></Box>
          <Text fontSize='8px'  fontWeight="400" color="black"   textAlign="center"   lineHeight="15px">© 2022 Rodan & Fields</Text>
    </Box>
  )
}

export default Checkout
