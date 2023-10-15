import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function RingGraph() {
  return (
    <Box w={["100%","100%","30%","30%","30%","30%"]} bg={"white"} p={"2.5%"} borderRadius={"10px"} mt={['4%','4%','4%','4%','4%','4%']}>
      <Box >
        <Text fontSize={"20px"} fontWeight={"500"}>
          Costumers
        </Text>
        <Text fontSize={"14"} color={"gray"}>
          Costumers that buy products
        </Text>
      </Box>
      <Box w={['52%','35%','90%','70%','70%','70%']} m={['5% auto','2% auto','21% auto','5% auto','5% auto','5% auto']}>
      <CircularProgressbarWithChildren
        value={65}
        styles={buildStyles({
          pathColor: "#8658EC",
          trailColor: "#eee",
        })}
      >
        <VStack>
          <Heading>65%</Heading>
          <Text>
            Total New <br /> Costumers
          </Text>
        </VStack>
      </CircularProgressbarWithChildren>
      </Box>
    </Box>
  );
}
