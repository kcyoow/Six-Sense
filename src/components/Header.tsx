import { Link } from 'react-router-dom';

function Header() {
  // TODO: 추후 디자인
  return (
    <div>
      <div>
        <Link to={`/`} className="btn-ghost btn hidden ">
          {'육감'}
        </Link>
        <Link to={`/intro`} className="btn-ghost btn hidden ">
          {'오감키트 소개'}
        </Link>
      </div>
    </div>
  );
}

export default Header;
