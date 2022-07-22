import React from 'react'
import { Box, Button, Heading, Text , Link, Input,Image, HStack} from '@chakra-ui/react'

const Consultant = () => {
    
  return (
        
       <Box  justifyContent="center" marginTop="50px">
           <Heading as='p' textAlign="center"  fontFamily="normal" fontSize="20px"  fontWeight="400"  lineHeight="38px" color="#222222">
                CONNECT WITH A CONSULTANT
           </Heading>
           <Box   width="50%"  marginLeft="23%" marginTop="20px">
               <Box  height="40px"    >
                <Text fontSize='12px' lineHeight="18px" color="black" textAlign="center" fontWeight="400"> R+F Independent Consultants give you one-on-one guidance for a personalized experience.
                  Connect with a Consultant today.
                </Text>
              </Box>
           </Box>      

           <Box display="flex" marginTop="50px" height="" >
                    <Box border="1px solid grey" width="40%" marginLeft="8%" paddingTop="30px" paddingBottom="30px">
                         <Text fontSize='12px' lineHeight="18px" color="black" textAlign="center" fontWeight="500"> I KNOW A CONSULTANT </Text>
                         <Text fontSize='10px' lineHeight="18px" padding="2%" color="black" textAlign="center" fontWeight="400"> Search for an R+F Consultant by entering their name or <br/> Consultant ID number. </Text>

                        <Box paddingTop="10px" margin="5px 60px 5px 65px">                        
                             <input style={{fontSize:"10px" }} placeholder='Name or Consultant ID'></input>
                        <Box border="0.1px solid grey"></Box>
                        <Button  height="32px" width="100%" backgroundColor="black" marginTop="20px" color="white" fontSize='10px' borderRadius="0px">SEARCH</Button>
                        
                      </Box>
                    </Box>
                    <Box border="1px solid grey"  width="42%" marginLeft="20px" paddingTop="30px">
                         <Text fontSize='12px' lineHeight="18px" color="black" textAlign="center" fontWeight="500"> MATCH ME WITH A CONSULTANT </Text>
                         <Text fontSize='10px' lineHeight="18px" padding="2%" color="black" textAlign="center" fontWeight="400"> Enter your location details to be matched with an R+F <br/> Consultant that serves your area. </Text>
                         <Box paddingTop="10px" margin="5px 60px 5px 65px">                        
                             <input style={{fontSize:"10px" }} placeholder='Zip Code'></input>
                        <Box border="0.1px solid grey"></Box>
                        <Button border="1px solid black" height="32px" width="100%" backgroundColor="white"  marginTop="20px" color="black" fontSize='10px' borderRadius="0px">NEXT</Button>
                        
                      </Box>
                    </Box>

                    
           </Box>
        </Box>
  )
}

export default Consultant
