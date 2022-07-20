import { Box, Button, Heading, Text , Link, Input} from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'


import React from 'react'

const Cart = () => {
  return (
    <div>
         <Heading as='p'  fontFamily="RFFontRoman, Arial, sans-serif;" size='30px' fontWeight="500"  lineHeight="36px" color="#272829">
                   REVIEW YOUR BAG
         </Heading>
         <Box justifyContent="center" border="1px solid red">
            <Box border="2px solid blue"  width="65%"  marginLeft="17%">
                 <Box backgroundColor="rgb(210,216,250)" height="40px"   justifyContent="center" >
                        <Text fontSize='10px' lineHeight="18px" color="#31668c" fontWeight="400"> Thank you for your order. Please note that R+F Instant 
                        Targeted Firming Gel Full Size will be shipped separately on a later date in July. 
                         </Text>
                 </Box>
                 

 {/* profuct box and order summery */}
                <Box display="flex" marginTop="20px">
                    <Box border="1px solid green" width="60%" backgroundColor="#aebac1">
                        <Box >                          
                            <img height="20px" style={{paddingTop:"5px"}} src='https://www.rodanandfields.com/en-us/_ui/images/pcperks_upsell/pc-perks-logo.png' />
                            <Text fontSize='10px' lineHeight="18px" color="black" fontWeight="400"> Subscribe & Save $11.00! </Text>
                            <Text fontSize='10px' lineHeight="6px" color="black" fontWeight="400">Join PC Perks for $19.95 to Save 10% + Get Free Shipping on orders $80+ </Text>
                            <Link href='#' fontSize='10px' lineHeight="6px" color="black" fontWeight="400">
                                    view more
                            </Link>
                            <br/>
                            <Button backgroundColor="black" color="white" fontSize='9px'>ADD MEMBERSHIP - $19.95</Button>
                        </Box>
                        <Box>2</Box>
                    </Box>


                    {/* flex right part */}


                    <Box border="1px solid green" marginLeft="5px" width="38%">
                           <Box height="35px" backgroundColor="#e4e4e4" marginTop="0px" >
                             <Text fontSize='10px'  fontWeight="500" color="black" textAlign="left" padding="5px" paddingTop="10px" lineHeight="8px"> ORDER SUMMARY </Text>
                           </Box>     
                           <Box display="flex"   marginTop="0px" >
                             <Text fontSize='10px'  fontWeight="500" color="black" textAlign="left" padding="5px"  lineHeight="1px"> SUB TOTAL </Text>
                             <Text fontSize='10px'  fontWeight="500" color="black" marginLeft="40%"  padding="5px"  justifyContent="end" lineHeight="1px"> $ 150.0 </Text>
                           </Box>    
                           <Box display="flex"   marginTop="0px" >
                             <Text fontSize='10px'  fontWeight="500" color="black" textAlign="left" padding="5px" paddingTop="0px" lineHeight="1px"> SHIPPING </Text>
                             <Text fontSize='10px'  fontWeight="500" color="black" marginLeft="30%"  padding="5px" paddingTop="0px" justifyContent="end" lineHeight="1px"> Calculated At Checkout </Text>
                           </Box>        
                           <hr/>  
                           <Box display="flex"   marginTop="0px" >
                             <Text fontSize='10px'  fontWeight="600" color="black" textAlign="left" padding="5px" paddingTop="0px" lineHeight="1px"> Estimated Total </Text>
                             <Text fontSize='10px'  fontWeight="600" color="black" marginLeft="30%"  padding="5px" paddingTop="0px" justifyContent="end" lineHeight="1px">$105.00 </Text>
                           </Box>    
                           <Box display="flex"   marginTop="0px" >
                           <Input height="25px" borderRadius="5px" border="1px solid grey" w="70%" placeholder='Basic usage' />
                            <Button height="30px" borderRadius="5px" border="1px solid grey" width="30%">APPLY</Button>
                           </Box>    
                    </Box>
                </Box>


            </Box>
            
         </Box>
    </div>
  )
}

export default Cart
