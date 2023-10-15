import { Search2Icon } from "@chakra-ui/icons"
import { Box, Drawer, DrawerContent, Input, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"

export default function SearchMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <Box display={{ sm: "none", base: "block" }}>
        <Search2Icon ref={btnRef} onClick={onOpen} color={'gray'}/>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerContent>
           <Input variant='flushed' placeholder="Search ..." p={2}/>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }