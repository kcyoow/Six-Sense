import { MainPageImage, Card, NoticeBoard } from "."
import styled from "styled-components"
import tw from "twin.macro"
const Cont = styled.div`
  ${tw`overflow-x-auto flex flex-row`}
`
const Cards = styled(Cont)`
  ${tw`w-4/5 min-w-[50%] scroll-auto scroll-ml-6 snap-start`}
`

export const HomePage = () => {

  return(
    <>
      <MainPageImage/>
      <Cont>
        <Cards>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Cards>
        <NoticeBoard/>
      </Cont>
    </>
  )

}
