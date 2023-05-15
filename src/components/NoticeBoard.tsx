import styled from "styled-components"
import tw from "twin.macro"

const NoticeCont = styled.div`
${tw`w-1/5`}
`
const NoticeMainTitleCont = styled.div`
${tw`border-orange-500 border-b-[5px] text-2xl font-semibold mt-16`}
`
const NoticeMainTitle = styled.div`

`
const Notice = styled.div`
${tw`my-6 mb-10`}
`
const NoticeTitle = styled.div`
${tw`text-gray-500 text-2xl`}
`
const NoticeSubtitle = styled.div`
${tw`text-xs`}
`

export const NoticeBoard = () => {
    return(
        <>
        <NoticeCont>
            <NoticeMainTitleCont>
                <NoticeMainTitle>
                    <p>게시판</p>
                </NoticeMainTitle>
            </NoticeMainTitleCont>
            <Notice>
            <NoticeTitle>
                후기 게시판
            </NoticeTitle>
            <NoticeSubtitle>
                {'>3개월 구독후기 입니다.'}<br/>
                {'>너무 좋아요....'}
            </NoticeSubtitle>
            </Notice>
            <Notice>
            <NoticeTitle>
                후기 게시판
            </NoticeTitle>
            <NoticeSubtitle>
                {'>3개월 구독후기 입니다.'}<br/>
                {'>너무 좋아요....'}
            </NoticeSubtitle>
            </Notice>
            <Notice>
            <NoticeTitle>
                후기 게시판
            </NoticeTitle>
            <NoticeSubtitle>
                {'>3개월 구독후기 입니다.'}<br/>
                {'>너무 좋아요....'}
            </NoticeSubtitle>
            </Notice>
        </NoticeCont>

        </>
    )
}