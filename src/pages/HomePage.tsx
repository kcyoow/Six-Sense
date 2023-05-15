import { MainPageImage, Card, NoticeBoard } from "."
import styled from "styled-components"
import tw from "twin.macro"
const Cont = styled.div`
  ${tw`overflow-x-auto flex flex-row h-[500px] my-auto`}
`
const Cards = styled(Cont)`
  ${tw`w-4/5 min-w-[0%] scroll-auto scroll-ml-6 snap-start`}
`
const Background = styled.div`
  ${tw`relative z-[10] h-full`}
`
const AppleImage = styled.img`
  ${tw`absolute bottom-[0%] right-[0%] z-[0]`}
`
export const HomePage = () => {

  return(
    <Background>
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
      <AppleImage height='250px' width='250px' src="apple.png" className="object-left-top"/>
    </Background>
  )

}
