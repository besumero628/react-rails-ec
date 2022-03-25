import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Top/Header";

export const HeaderLayout: VFC = memo(() => {
  return (
    <>
      <Header />
    </>
  )
})