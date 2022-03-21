import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

type Props = {
  derection: boolean //true:left false:right
  slider: Slider | null
}

export const CaptionArrow: VFC<Props> = memo((props)=>{
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <>
        <IconButton
        aria-label={props.derection ? "left-arrow" : "right-arrow"}
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => props.slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
    </>
  )
})