import Contents from '../components/Contents';
// import Example from '../components/Example';

function IntroPage() {
  //

  return (
    // 좌우 padding 36px, 상 36px 하 48px
    <div className="mt-36 mb-48 flex flex-col gap-36">
      {/* 소개 + 이미지 */}
      <div className="flex flex-row w-full h-96 gap-8">
        {/* p-24 */}
        {/* 좌: 6감 소개 */}
        <div className="w-1/2 pt-8 pr-20">
          <div className=" w-full h-96">
            <p className="text-4xl text-grey font-bold ml-36">왜 6감이어야 할까요?</p>
            <p className="bg-main h-1.5 mb-4 w-10/12"></p>
            <p className="text-lg text-main flex gap-3 mb-20 mt-8 ml-36">
              <span>#논문근거</span>
              <span>#친환경적</span>
              <span>#안정성검사</span>
              <span>#성장발달</span>
              <span>#구독</span>
            </p>
            <p className="bg-light-grey h-1 mb-2 w-1/3 ml-36"></p>
            <div className="pl-36">
              <p>브랜드 설명 XXX 브랜드 설명 XXX 브랜드 설명 XXX</p>
              <p>브랜드 설명 XXX 브랜드 설명 XXX 브랜드 설명 XXX</p>
              <p>브랜드 설명 XXX 브랜드 설명 XXX 브랜드 설명 XXX</p>
            </div>
          </div>
        </div>
        {/* 우: 오감키트 목업 이미지 */}
        <div className="w-1/2 mr-36">
          <div className="border-2 border-black h-96">오감키트 목업 이미지</div>
        </div>
      </div>
      {/* 예시 */}
      <div className="mx-36 flex flex-row">
        <div className="w-1/12">
          <div className="text-4xl text-grey font-bold">예시</div>
          <p className="bg-main h-1 w-11/12"></p>
        </div>
        <div className="w-11/12">
          <div className="border-2 border-black h-96">동영상</div>
        </div>
      </div>
      {/* 구성품 */}
      <div className="mx-36 flex flex-row">
        <div className="w-1/12">
          <div className="text-4xl text-grey font-bold">구성품</div>
          <p className="bg-main h-1 w-11/12"></p>
        </div>
        <div className="w-11/12">
          <div className="border-2 border-black h-96">추가 예정</div>
          <p className="text-center text-grey text-xl mt-16">키트를 선택해주세요.</p>
        </div>
      </div>
      {/* 회차별 소개 */}
      <Contents />
      {/* <Example /> */}
    </div>
  );
}

export default IntroPage;
