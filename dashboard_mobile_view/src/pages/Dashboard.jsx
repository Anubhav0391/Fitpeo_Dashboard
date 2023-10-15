import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";
import Graph from "../components/Graph";
import RingGraph from "../components/RingGraph";
import ProductTable from "../components/ProductTable";
import MenuMobile from "../components/MenuMobile";
import SearchMobile from "../components/SearchMobile";

export default function Dashboard() {
  return (
    <Box
      w={["100%", "100%", "100%", "100%", "83%", "83%"]}
      bg={"#F5F6F8"}
      p={"1.5% 3%"}
    >
      <HStack justifyContent={"space-between"} mb={"4%"}>
        <Text
          fontSize={{ base: "20px", sm: "24px" }}
          fontWeight={"700"}
          ml={"10px"}
        >
          Hello Anubhav 👋🏻
        </Text>
        <InputGroup
          w={"25%"}
          bg={"white"}
          border={"1px solid white"}
          borderRadius={"5px"}
          display={{ sm: "block", base: "none" }}
        >
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray" />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>
        <HStack display={{xl:'none',base:'flex'}}>
          <SearchMobile />
          <MenuMobile />
        </HStack>
      </HStack>
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={["2%", "3%", "3%", "3%", "3%", "3%"]}
      >
        <Card
          background={"#DCFEED"}
          color={"#01A848"}
          t1={"Earning"}
          t2={"198k"}
          t3={"↑37.8"}
        />
        <Card
          background={"#E7DBFF"}
          color={"#B02BFF"}
          t1={"Order"}
          t2={"2.4k"}
          t3={"↓2"}
        />
        <Card
          background={"#CCF2FF"}
          color={"#2873CA"}
          t1={"Balance"}
          t2={"2.4k"}
          t3={"↓2"}
        />
        <Card
          background={"#FEABD5"}
          color={"#D8000E"}
          t1={"Total Sales"}
          t2={"89k"}
          t3={"↑11"}
        />
      </Grid>
      <Flex
        h={"fit-content"}
        justifyContent={"space-between"}
        direction={["column", "column", "row", "row", "row", "row"]}
      >
        <Graph />
        <RingGraph />
      </Flex>
      <ProductTable />
    </Box>
  );
}
