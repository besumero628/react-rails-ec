import { memo, VFC } from "react";
import { CaptionCarousels } from "../organisms/CaptionCarousels";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Home: VFC = memo(() => {
  return (
    <>
    <HeaderLayout>chi</HeaderLayout>
    <CaptionCarousels />
    </>
  )
})