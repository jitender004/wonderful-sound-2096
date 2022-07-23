import { Box , Text } from "@chakra-ui/react";
import React from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem
} from "@chakra-ui/accordion";

const SideBar = ()=>{
    return(
        <>
        <Box width={"700px"} height={"1000px"} >
            <Box paddingBottom={"20px"} paddingLeft={"20px"}>
                <Text fontSize={"20px"}>Filter By</Text>
            </Box>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"15px"} fontWeight={"semibold"}>
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display={"flex"} flexDirection={"column"} >
            <Checkbox>Regimen (6)</Checkbox>
            <Checkbox>Face Serums (16)</Checkbox>
            <Checkbox>Eyes (15)</Checkbox>
            <Checkbox>Face Masks (5)</Checkbox>
            <Checkbox>Hand {"&"} Body (5)</Checkbox>
            <Checkbox>Sun Protection (9)</Checkbox>
            <Checkbox>Pro Skincare Tools (11)</Checkbox>
            <Checkbox>Accessories (9)</Checkbox>
            <Checkbox>Special Offers (18)</Checkbox>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"15px"} fontWeight={"semibold"}>
                Skin Concern
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display={"flex"} flexDirection={"column"}>
            <Checkbox>Fine Lines {"&"} Wrinkles (26)</Checkbox>
            <Checkbox>Lifting {"&"} Firming (21)</Checkbox>
            <Checkbox>Dull {"&"} Tired Skin (8)</Checkbox>
            <Checkbox>Acne {"&"} Breakouts (13)</Checkbox>
            <Checkbox>Uneven Tone {"&"} Dark Marks (12)</Checkbox>
            <Checkbox>Sensitivity {"&"} Visible Redness (8)</Checkbox>
            <Checkbox>Pores {"&"} Blackheads (11)</Checkbox>
            <Checkbox>Dry Skin (18)</Checkbox>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"15px"} fontWeight={"semibold"}>
                Application Area
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display={"flex"} flexDirection={"column"}>
            <Checkbox>Face (59)</Checkbox>
            <Checkbox>Eyes (7)</Checkbox>
            <Checkbox>Eyelashes (2)</Checkbox>
            <Checkbox>Body (6)</Checkbox>
            <Checkbox>Hands (2)</Checkbox>
            <Checkbox>Lips (3)</Checkbox>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={"15px"} fontWeight={"semibold"}>
                Product Line
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} display={"flex"} flexDirection={"column"}>
            <Checkbox>Reverse (11)</Checkbox>
            <Checkbox>Unblemish (9)</Checkbox>
            <Checkbox>DSoothe (8)</Checkbox>
            <Checkbox>Spotless (4)</Checkbox>
            <Checkbox>Recharge (8)</Checkbox>
            <Checkbox>Recharge (8)</Checkbox>
            <Checkbox>Enhancements (22)</Checkbox>
            <Checkbox>Dermacosmetics (2)</Checkbox>
            <Checkbox>Essentials (8)</Checkbox>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </Box>
    </>
    )
}

export {SideBar};