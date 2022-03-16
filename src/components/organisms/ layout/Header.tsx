import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const onClickHome = () => {}
  return (
    <>
      <Flex as="nav" bg="gray.800" color="black" align="center" justify="space-between" padding={{base: 3, md: 5}}>
        <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}} onClick={onClickHome}>
          <Heading as="h1" fontSize={{base: "md", md: "lg"}} color="white" >
            Rexia
          </Heading>
        </Flex>
        <IconButton 
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm" 
          display={{base:"block", md:"none"}}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800">
            <DrawerBody >
              <Button w="100%" variant='ghost' color="white" _hover={{bg: 'cyan.400'}} p={2}>Home</Button>
              <Button w="100%" variant='ghost' color="white" _hover={{bg: 'cyan.400'}} p={2} >SignUp</Button>
              <Button w="100%" variant='ghost' color="white" _hover={{bg: 'cyan.400'}} p={2} >SignIn</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
})