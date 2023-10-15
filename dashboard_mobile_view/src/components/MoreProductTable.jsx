import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  Select,
} from "@chakra-ui/react";
import React from "react";

export default function MoreProductTable() {
  return (
    <Box display={{ base: "block", md: "none" }}>
      <Menu>
        <MenuButton as={Button} bg={"transparent"}>
          ⁝
        </MenuButton>
        <MenuList p={5}>
          <InputGroup
            bg={"white"}
            borderRadius={"5px"}
            mb={5}
          >
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray" />
            </InputLeftElement>
            <Input placeholder="Search" fontSize={"14px"} border={"1px solid gainsboro"}/>
          </InputGroup>
          <Select border={"1px solid gainsboro"} color={"gray"} fontSize={"14px"}>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 15 days">Last 15 days</option>
          </Select>
        </MenuList>
      </Menu>
    </Box>
  );
}
