import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

type Props = {
  slider: Slider | null
}

export const CaptionLeftArrow: VFC<Props> = memo((props)=>{
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <>
      <IconButton
        aria-label="left-arrow"
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