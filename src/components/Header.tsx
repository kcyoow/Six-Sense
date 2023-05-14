import { Link } from 'react-router-dom';
import styled from "styled-components"
import tw from "twin.macro"

const Test = styled.ul`
${tw`list-none m-0 p-0 overflow-hidden bg-[#DADADA]`}
`
function Header() {
  // TODO: 추후 디자인
  return (
    <div>
      <Test>
        <Link to={`/`} className="btn-ghost btn">
          {'육감'}
        </Link>
        <Link to={`/intro`} className="btn-ghost btn">
          {'오감키트 소개'}
        </Link>
      </Test>
    </div>
  );
}

export default Header;
