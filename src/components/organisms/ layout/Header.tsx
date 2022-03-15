import { Flex, Heading, IconButton, Menu, MenuButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  const onClickHome = () => {}
  return (
    <>
      <Flex as="nav" bg="gray.800" color="black" align="center" justify="space-between" padding={{base: 3, md: 5}}>
        <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}} onClick={onClickHome}>
          <Heading as="h1" fontSize={{base: "md", md: "lg"}} color="white" >
            Rexia
          </Heading>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={}
            />
          </Menu>
        </Flex>
      </Flex>
    </>
  )
})