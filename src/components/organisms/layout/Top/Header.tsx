import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { LeftDrawer } from "../../../molecules/LeftDrawer";

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
      <LeftDrawer onClose={onClose} isOpen={isOpen} />
    </>
  )
})