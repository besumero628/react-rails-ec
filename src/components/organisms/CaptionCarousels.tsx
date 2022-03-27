import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import Slider from "react-slick";
import { CaptionLeftArrow } from "../atom/arrow/CaptionLeftArrow";
import { CaptionRightArrow } from "../atom/arrow/CaptionRightArrow";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const CaptionCarousels: VFC = memo (()=> {
  const [slider, setSlider] = useState<Slider | null>(null)

  const cards = [
    {
      title: 'Rexia test title',
      text: 'this is test text. useing React x Typescript x RailsAPI',
      image: "https://source.unsplash.com/BiOA0I1ui8o"
    },
    {
      title: 'Rexia test title2',
      text: 'this is test text. useing React x Typescript x RailsAPI',
      image: 'https://source.unsplash.com/random'
    }
  ]

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <CaptionLeftArrow slider={slider} />
      <CaptionRightArrow slider={slider} />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
})