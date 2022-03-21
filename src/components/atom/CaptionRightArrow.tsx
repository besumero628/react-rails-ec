import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

type Props = {
  slider: Slider | null
}

export const CaptionRightArrow: VFC<Props> = memo((props)=>{
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => props.slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton> 
    </>
  )
})