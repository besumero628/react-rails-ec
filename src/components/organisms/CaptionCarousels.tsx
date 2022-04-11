import { Box } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import Slider from "react-slick";
import { CaptionLeftArrow } from "../atom/arrow/CaptionLeftArrow";
import { CaptionRightArrow } from "../atom/arrow/CaptionRightArrow";
import { SliderCard } from "../molecules/SliderCard";

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
      title: '22\' Spring Collection',
      text: 'this is test text. useing React x Typescript x RailsAPI!',
      image: "https://source.unsplash.com/BiOA0I1ui8o"
    },
    {
      title: 'Hannah Collection',
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
          <SliderCard index={index} title={card.title} text={card.text} image={card.image} />
        ))}
      </Slider>
    </Box>
  )
})