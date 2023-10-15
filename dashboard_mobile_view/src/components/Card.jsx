import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { RiFileListLine, RiHandbagLine, RiMoneyDollarCircleLine, RiWallet3Line } from "react-icons/ri";

export default function Card({background,color,t1,t2,t3}) {
  return (
    <HStack bg={"white"} borderRadius={"10px"} p={"6%"}>
      <Box
        bg={background}
        borderRadius={"50%"}
        color={color}
        fontSize={"58px"}
        p={"11%"}
        mr={'2%'}
      >
        {t1=='Earning'?<RiMoneyDollarCircleLine />:t1=='Order'?
        <RiFileListLine/>:t1=='Balance'?<RiWallet3Line/>:<RiHandbagLine/>}
      </Box>
      <Box>
        <Text color={'gray'} fontSize={'13px'}>{t1}</Text>
        <Text fontSize={'28px'} fontWeight={'500'}>${t2}</Text>
        <Text fontSize={['13px','13px','13px','9px','13px','13px']}><span style={{color:t3.includes('↑')?"#25A744":"#CC103D", fontWeight:'500'}}>{t3}%</span> this month</Text>
      </Box>
    </HStack>
  );
}
