import { useState } from 'react';
// 회차별 예시

function Example() {
  const [isFirstHover, setIsFirstHover] = useState(false);
  const [isSecondHover, setIsSecondHover] = useState(false);
  const [isThirdHover, setIsThirdHover] = useState(false);
  const [isForthHover, setIsForthHover] = useState(false);
  return (
    <div className="mr-36 flex flex-row">
      <div className="w-2/12 flex flex-col gap-12">
        <div onMouseOver={() => setIsFirstHover(true)} onMouseOut={() => setIsFirstHover(false)} className={isFirstHover ? 'pr-4 transition-all delay-75 ' : 'pr-24 transition-all delay-75'}>
          <div className="text-4xl text-grey font-bold text-right">1회차</div>
          <p className="bg-main h-1 w-full"></p>
        </div>
        <div onMouseOver={() => setIsSecondHover(true)} onMouseOut={() => setIsSecondHover(false)} className={isSecondHover ? 'pr-4 transition-all delay-75 ' : 'pr-24 transition-all delay-75'}>
          <div className="text-4xl text-grey font-bold text-right">2회차</div>
          <p className="bg-main h-1 w-full"></p>
        </div>
        <div onMouseOver={() => setIsThirdHover(true)} onMouseOut={() => setIsThirdHover(false)} className={isThirdHover ? 'pr-4 transition-all delay-75 ' : 'pr-24 transition-all delay-75'}>
          <div className="text-4xl text-grey font-bold text-right">3회차</div>
          <p className="bg-main h-1 w-full"></p>
        </div>
        <div onMouseOver={() => setIsForthHover(true)} onMouseOut={() => setIsForthHover(false)} className={isForthHover ? 'pr-4 transition-all delay-75 ' : 'pr-24 transition-all delay-75'}>
          <div className="text-4xl text-grey font-bold text-right ease-in-out duration-300">4회차</div>
          <p className="bg-main h-1 w-full"></p>
        </div>
      </div>
      <div className="w-10/12">
        <div className="border-2 border-black h-96">
          {!isFirstHover && !isSecondHover && !isThirdHover && !isForthHover && <div>1번 키트</div>}
          {isFirstHover && <div>1번 키트</div>}
          {isSecondHover && <div>2번 키트</div>}
          {isThirdHover && <div>3번 키트</div>}
          {isForthHover && <div>4번 키트</div>}
        </div>
      </div>
    </div>
  );
}

export default Example;
