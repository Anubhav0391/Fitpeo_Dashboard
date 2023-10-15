import { Box, Select, Text, HStack, Grid, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Graph() {
  const date = new Date();
  const month=date.getMonth();

  const data = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 50 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 14 },
    { name: "May", value: 100 },
    { name: "Jun", value: 15 },
    { name: "Jul", value: 89 },
    { name: "Aug", value: 58 },
    { name: "Sep", value: 98 },
    { name: "Oct", value: 56 },
    { name: "Nov", value: 34 },
    { name: "Dec", value: 98 },
  ];

  return (
    <Box bg={"white"} p={"2.5%"} w={["100%","100%","67%","67%","67%","67%"]} borderRadius={"10px"} mt={['16%','5%','4%','4%','4%','4%']}>
      <HStack justifyContent={"space-between"}>
        <Box>
          <Text fontSize={"20px"} fontWeight={"500"}>
            Overview
          </Text>
          <Text fontSize={"14"} color={"gray"}>
            Monthly Earning
          </Text>
        </Box>
        <Select w={["42%","27%","26%","20%","20%","20%"]} border={"1px solid white"} color={"gray"}>
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </Select>
      </HStack>
      <Box h={["230px","235px","230px","230px","230px","230px"]} mt={"10px"}>
        <Grid templateColumns={"repeat(12,1fr)"} gap={"2%"}>
          {data.map((el,i) => (
            <VStack >
              <Box h={"200px"} mt={"10px"}>
                <Box h={`${200 - el.value * 2}px`} />
                <Box
                  borderRadius={"15px"}
                  bg={i==month?'#5A32EA':"gainsboro"}
                  h={`${el.value * 2}px`}
                  w={["15px","28px","29px","35px","40px","40px"]}
                />
              </Box>
              <Text fontSize={["10px","14px","14px","14px","14px","14px"]} textAlign={"center"}>
                {el.name}
              </Text>
            </VStack>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
