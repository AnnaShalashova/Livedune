
import './Header.css';
import logo from "../../assets/img/LiveDune.svg";
import { Link } from 'react-router-dom';

function Header({pText, btnText, loggedIn, path}) {

  if (loggedIn) {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="Logo company" width="120" height="40"/>
        <Link to="/" className="exit-button">{btnText}</Link>
      </header>
    );
  }

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo company" width="120" height="40"/>
      <p className='text-grey'>{pText}</p>
      <Link to={path} className="blue-button">{btnText}</Link>
    </header>
  );
}

export default Header;
