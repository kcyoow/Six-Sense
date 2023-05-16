import styled from "styled-components"
import tw from "twin.macro"
import { Link } from "react-router-dom"

const CardCont = styled.div`
${tw`w-[250px] h-[320px] min-w-max min-h-max border border-black rounded-[24px] mx-5 my-16 p-7 shadow-[10px_10px_10px_-7px_rgba(0,0,0,0.3)] select-none cursor-pointer transition hover:ease-in hover:scale-110 scale-100 ease-out duration-200`}
`
const CardImg = styled.img`
${tw`border w-[210px] h-[170px] mx-auto mb-[10px]`}
`
const CardTitle = styled.div`
${tw`text-center text-[15px] font-bold `}
`
const CardSubtitle = styled.div`
${tw`text-center text-[11px] font-light mb-[15px]`}
`
const CardMoneyText = styled.div`
${tw`text-center text-[13px] font-semibold`}
`
const CardLink = styled.div`
${tw`text-center text-[11px] font-semibold text-orange-500 underline`}
`

export const Card = () => {
    return(
        <CardCont>
            <CardImg src="test.png" alt="이미지" className='prevent-drag'/>
            <CardTitle>띄워요! 물 오감키트</CardTitle>
            <CardSubtitle>물을 이용한 중력 오감놀이 키트</CardSubtitle>
            <CardMoneyText>30,000&#92;</CardMoneyText>
            <CardLink>
                <Link to={`https://www.naver.com`} className="hover:box-decoration-clone hover:bg-indigo-200 prevent-drag">
                    {'근거 논문>'}
                </Link>
            </CardLink>
        </CardCont>
    )
}