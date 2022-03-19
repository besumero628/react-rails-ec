import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onClose: ()=>void
  isOpen: boolean
}

export const LeftDrawer: VFC<Props> = memo((props) => {
  const {onClose, isOpen} = props
  return (
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
  )
}) 