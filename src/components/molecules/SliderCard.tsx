import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  index: number,
  title: string,
  text: string,
  image: string
}

export const SliderCard: VFC<Props> = memo((props)=>{
  const {index, title, text, image} = props
  return(
    <Box
      key={index}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${image})`}>
      {/* This is the block you need to change, to customize the caption */}
      <Container size="container.lg" height="600px" position="relative">
        <Stack
          spacing={6}
          p={16}
          backgroundColor="whiteAlpha.700"
          w={'full'}
          // maxW={'lg'}
          position="absolute"
          top="50%"
          transform="translate(0, -50%)">
          <Heading fontSize={{ base: '3xl', md: '3xl' }}>
            {title}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
            {text}
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}) 