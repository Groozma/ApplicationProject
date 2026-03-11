import './Header.scss';
import logo from '../../images/logo.png'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt='Onward Social Skills logo' className='logo'/>
      <div>Onward Social Skills</div>
      <div>Social Skills Program for kids from 5-18</div>
    </div>
  );
}

export default Header;
