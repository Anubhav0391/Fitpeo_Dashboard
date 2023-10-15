import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  HStack,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import {
  TbCoins,
  TbCube,
  TbDiscount2,
  TbHelpSquare,
  TbSettings2,
  TbSquareKey,
} from "react-icons/tb";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function Sidebar() {
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <Box  w={"100%"}>
      <Box h={{base:'85vh',xl:"89vh"}}  p={"10%"}>
        <Box color="white" display={"flex"} alignItems={"center"} mb={"18%"}>
          <TbSettings2 fontSize={"30px"} />
          <Text fontSize={"24px"} fontWeight={"600"} ml={"10px"}>
            Dashboard
          </Text>
        </Box>

        <Accordion border="1px solid #040440" color={"#b0b1d0"} allowToggle>
          <AccordionItem>
            <Text fontSize={16}>
              <AccordionButton
                mb={5}
                onClick={() => setIsActive("dashboard")}
                _hover={{
                  background: "#2D2D69",
                  color: "white",
                  borderRadius: "10px",
                }}
                style={
                  isActive == "dashboard"
                    ? {
                        background: "#2D2D69",
                        color: "white",
                        borderRadius: "10px",
                      }
                    : {}
                }
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TbSquareKey fontSize={25} />
                  <Text ml={"10px"}>Dashboard</Text>
                </Box>
                <ChevronRightIcon />
              </AccordionButton>
            </Text>
          </AccordionItem>

          <AccordionItem>
            <Text fontSize={16}>
              <AccordionButton
                mb={5}
                onClick={() => setIsActive("product")}
                _hover={{
                  background: "#2D2D69",
                  color: "white",
                  borderRadius: "10px",
                }}
                style={
                  isActive == "product"
                    ? {
                        background: "#2D2D69",
                        color: "white",
                        borderRadius: "10px",
                      }
                    : {}
                }
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TbCube fontSize={25} />
                  <Text ml={"10px"}>Product</Text>
                </Box>
                <ChevronRightIcon />
              </AccordionButton>
            </Text>
          </AccordionItem>

          <AccordionItem>
            <Text fontSize={16}>
              <AccordionButton
                mb={5}
                onClick={() => setIsActive("costumers")}
                _hover={{
                  background: "#2D2D69",
                  color: "white",
                  borderRadius: "10px",
                }}
                style={
                  isActive == "costumers"
                    ? {
                        background: "#2D2D69",
                        color: "white",
                        borderRadius: "10px",
                      }
                    : {}
                }
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <BsPerson fontSize={25} />
                  <Text ml={"10px"}>Costumers</Text>
                </Box>
                <ChevronRightIcon />
              </AccordionButton>
            </Text>
          </AccordionItem>

          <AccordionItem>
            <Text fontSize={16}>
              <AccordionButton
                mb={5}
                onClick={() => setIsActive("income")}
                _hover={{
                  background: "#2D2D69",
                  color: "white",
                  borderRadius: "10px",
                }}
                style={
                  isActive == "income"
                    ? {
                        background: "#2D2D69",
                        color: "white",
                        borderRadius: "10px",
                      }
                    : {}
                }
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TbCoins fontSize={25} />
                  <Text ml={"10px"}>Income</Text>
                </Box>
                <ChevronRightIcon />
              </AccordionButton>
            </Text>
          </AccordionItem>

          <AccordionItem>
            <Text fontSize={16}>
              <AccordionButton
                mb={5}
                onClick={() => setIsActive("promote")}
                _hover={{
                  background: "#2D2D69",
                  color: "white",
                  borderRadius: "10px",
                }}
                style={
                  isActive == "promote"
                    ? {
                        background: "#2D2D69",
                        color: "white",
                        borderRadius: "10px",
                      }
                    : {}
                }
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TbDiscount2 fontSize={25} />
                  <Text ml={"10px"}>Promote</Text>
                </Box>
                <ChevronRightIcon />
              </AccordionButton>
            </Text>
          </AccordionItem>

          <AccordionItem>
            <Text fontSize={16}>
              <AccordionButton
                mb={5}
                onClick={() => setIsActive("help")}
                _hover={{
                  background: "#2D2D69",
                  color: "white",
                  borderRadius: "10px",
                }}
                style={
                  isActive == "help"
                    ? {
                        background: "#2D2D69",
                        color: "white",
                        borderRadius: "10px",
                      }
                    : {}
                }
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TbHelpSquare fontSize={25} />
                  <Text ml={"10px"}>Help</Text>
                </Box>
                <ChevronRightIcon />
              </AccordionButton>
            </Text>
          </AccordionItem>
        </Accordion>
      </Box>
      <HStack p={"8px"} m={{base:'10px',xl:"auto"}} w={{xl:'15%'}} bg={"#2D2D69"} borderRadius={'5px'} position={'fixed'} ml={{xl:'1%'}}>
        <Img
          borderRadius={"50%"}
          w={"20%"}
          src="https://media.licdn.com/dms/image/D4D03AQFdWqC0kra_2g/profile-displayphoto-shrink_400_400/0/1684481467685?e=1702512000&v=beta&t=OKIVCxAVubCYKPA9aNC_vygwgAwFxjQ3BD7cf-u2IPQ"
        />
        <Box>
          <Text fontSize={{"xl":"14px","2xl":"16px"}} color={"white"}>Anubhav Dixit</Text>
          <Text fontSize={{"xl":"13px","2xl":"14px"}} color={"#b0b1d0"}>
            Project Manager
          </Text>
        </Box>
        <ChevronDownIcon color={"#b0b1d0"} ml={{"xl":'3%',"2xl":'13%'}} fontSize={'24px'}/>
      </HStack>
    </Box>
  );
}
