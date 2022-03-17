import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";

export const Header: VFC = memo(() => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const onClickHome = () => {}
  return (
    <>
      <Flex as="nav" bg="white" color="black" align="center" justify="space-between" padding={{base: 3, md: 5}}>
        <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}} onClick={onClickHome}>
          <Heading as="h1" fontSize={{base: "md", md: "lg"}} color="black" >
            Rexia
          </Heading>
        </Flex>
        <IconButton 
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm" 
          bg="white"
          display={{base:"block", md:"none"}}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="white">
            <DrawerBody >
              <Button w="100%" variant='outline' _hover={{bg: 'cyan.400'}} p={2}>Home</Button>
              <Button w="100%" variant='ghost' _hover={{bg: 'cyan.400'}} p={2} >SignUp</Button>
              <Button w="100%" variant='ghost' _hover={{bg: 'cyan.400'}} p={2} >SignIn</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Flex justify="center">
        {/* <Box alignItems="center" > */}
          <Image src="https://source.unsplash.com/BiOA0I1ui8o" maxHeight="90vh" />
        {/* </Box> */}
      </Flex>
      
      
    </>
  )
})