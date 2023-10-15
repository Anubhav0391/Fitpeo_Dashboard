import { Box, Button, Drawer, DrawerCloseButton, DrawerContent, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import {GiHamburgerMenu} from 'react-icons/gi'
import Sidebar from "./Sidebar"

export default function MenuMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <Box display={['block','block','block','block','none','none']} w={'fit-content'} >
        <Button ref={btnRef} onClick={onOpen} bg={'transparent'} w={'fit-content'}>
          <GiHamburgerMenu/>
        </Button>
        <Drawer
        
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerContent bg={"#040440"} h={'1000px'} display={['block','block','block','block','none','none']}>
            <DrawerCloseButton color={'white'}/>
           <Sidebar/>
          </DrawerContent>
        </Drawer>
      </Box>
    )
}
