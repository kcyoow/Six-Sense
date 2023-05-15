import styled from "styled-components"
import tw from "twin.macro"

const Image = styled.div`
  ${tw`bg-black object-none w-full h-96`}
`
const MainImage = styled.div`
  ${tw`relative`}
`
const ImageText = styled.div`
  ${tw`absolute px-[2px] pt-[5px] pb-[3px] text-center top-[5%] left-[50%] text-white text-4xl translate-x-[-50%] border-b-2 border-orange-500 select-none`}
`
const ImageSubText = styled.div`
  ${tw`absolute pt-[5px] pb-[1px] text-center top-[20%] left-[50%] text-sm translate-x-[-50%] border-b-2 text-orange-500 select-none`}
`
const Background = styled.div`
  ${tw`h-full w-full`}
`

export const MainPageImage = () => {
    return(
        <Background>
          <MainImage>
            <Image>
              <img src="test.png" className="w-full h-full object-none prevent-drag"/>
            </Image>
            <ImageText>
              <p>&nbsp;오감에 감을 더하다.&nbsp;</p>
            </ImageText>
            <ImageSubText>
              <p>&nbsp;육감이어야 하는 이유&nbsp;</p>
            </ImageSubText>
          </MainImage>
        </Background>
        
      )
}