import { Link } from 'react-router-dom';
import styled from "styled-components"
import tw from "twin.macro"

const Nav = styled.div`
${tw`list-none overflow-hidden bg-[#434344] flex justify-center w-full`}
`
const NavCont = styled.div`
${tw`text-[#D2CCC1] text-center py-1 px-5 no-underline hover:bg-black`}
`
const Image = styled.img`
`
export const Header = () => {
  // TODO: 추후 디자인
  return (
    <div>
      <Nav>
        <Link to={`/`}>
          <NavCont>
            <Image src='apple.png' height='4px' width='20px'>
            </Image>
          </NavCont>
        </Link>
        <Link to={`/`}>
          <NavCont>
            {'육감'}
          </NavCont>
        </Link>
        <Link to={`/intro`}>
          <NavCont>
            {'오감키트 소개'}
          </NavCont>
        </Link>
      </Nav>
    </div>
  );
}

export default Header;
