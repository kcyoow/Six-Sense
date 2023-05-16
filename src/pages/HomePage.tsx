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
         {/* src: 이미지 파일, title: card 타이틀, subtitle: card 서브타이틀 alt: 이미지 
         대체문구 pay: 가격(예: 30,000) paperLink: 논문 주소 */}
          <Card src="" title="띄워요! 물 오감키트" subtitle="물을 이용한 중력 오감놀이 키트" pay="30,000" alt="이미지1" paperLink="https://www.naver.com"/>
          <Card src="" title="" subtitle="" alt="이미지2" pay="" paperLink=""/>
          <Card src="" title="" subtitle="" alt="이미지3" pay="" paperLink=""/>
          <Card src="" title="" subtitle="" alt="이미지4" pay="" paperLink=""/>
        </Cards>
        <NoticeBoard/>
      </Cont>
      <AppleImage height='250px' width='250px' src="apple.png" className="object-left-top"/>
    </Background>
  )

}
