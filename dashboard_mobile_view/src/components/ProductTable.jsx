import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import MoreProductTable from "./MoreProductTable";

export default function Producttable() {
  return (
    <Box bg={"white"} p={"2.5%"} borderRadius={"10px"} my={"4%"}>
      <HStack justifyContent={"space-between"}>
        <Box>
          <Text fontSize={"20px"} fontWeight={"500"}>
            Product Sell
          </Text>
        </Box>
        <HStack justifyContent={"space-between"} display={["none","none","flex","flex","flex","flex",]}>
          <InputGroup
            w={"40%"}
            bg={"white"}
            border={"1px solid white"}
            borderRadius={"5px"}
          >
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray" />
            </InputLeftElement>
            <Input placeholder="Search" fontSize={"14px"} />
          </InputGroup>
          <Select
            w={"40%"}
            border={"1px solid white"}
            color={"gray"}
            fontSize={"14px"}
          >
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 15 days">Last 15 days</option>
          </Select>
        </HStack>
        <MoreProductTable/>
      </HStack>
      <TableContainer>
        <Table variant="unstyled" overflowX={'auto'}>
          <Thead color={"gray"} fontSize={["12px","12px","12px","14px","14px","14px"]}>
            <Tr>
              <Td p={["8px 12px","14px 20px","16px 24px","16px 24px","16px 24px","16px 24px"]}>Product Name</Td>
              <Td p={["8px 12px","14px 20px","16px 24px","16px 24px","16px 24px","16px 24px"]}>Stock</Td>
              <Td p={["8px 12px","14px 20px","16px 24px","16px 24px","16px 24px","16px 24px"]}>Price</Td>
              <Td p={["8px 12px","14px 20px","16px 24px","16px 24px","16px 24px","16px 24px"]}>Total Sales</Td>
            </Tr>
          </Thead>
          <Tbody fontSize={{base:"12px",sm:"14px",md:"16px"}}>
            {new Array(10).fill(0).map(()=><Tr>
              <Td p={["8px 12px","14px 20px","16px 24px","16px 24px","16px 24px","16px 24px"]} display={'flex'} flexDirection={["column","column","row","row","row","row"]}>
                <Img
                  src="https://e1.pxfuel.com/desktop-wallpaper/521/315/desktop-wallpaper-anime-aesthetic-pc-90s-anime-aesthetic-laptop.jpg"
                  borderRadius={"10px"}
                  w={["50%","50%","12%","12%","12%","12%"]}
                  mr={'2%'}
                />
                <Box>
                  <Text fontWeight={"700"}>Abstract 3D</Text>
                  <Text color={"gray"} w={["20vw","20vw","fit-content","fit-content","fit-content","fit-content"]} overflow={["hidden","hidden","visible","visible","visible","visible"]} textOverflow={"ellipsis"} fontSize={["11px","14px","12px","14px","14px","14px"]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </Text>
                </Box>
              </Td>
              <Td p={["8px 12px","14px 20px","16px 24px","16px 24px","16px 24px","16px 24px"]}>32 in stock</Td>
              <Td p={["8px 12px","14px 20px","16px 24px","16px 24px","16px 24px","16px 24px"]}>
                <strong>$ 45.99</strong>
              </Td>
              <Td p={["8px 12px","14px 20px","16px 24px","16px 24px","16px 24px","16px 24px"]}>20</Td>
            </Tr>)}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
