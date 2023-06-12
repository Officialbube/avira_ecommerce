import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineMenu} from "react-icons/ai";
import logoImg from "../../assets/images/Frame.png"
import './Header.css';
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";



const cart = (
  <span className="cart">
    <Link to='/cart'>
      cart
      <AiOutlineShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
)
function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()
  const toggleMenu = ()=>{
    setShowMenu(!showMenu)
  };

  const hideMenu = ()=>{
    setShowMenu(false)
  }

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout Successfully.")
      navigate("/")
    }).catch((error) => {
      toast.error(error.message)
    });
    
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to='/'>
            <img src={logoImg} alt="Logo" />
          </Link>
        </div>
        <nav className={showMenu ? `${["show-nav"]}` : `${["hide-nav"]}`}>
          <div
            className={showMenu ? `${["nav-wrapper"]} ${["show-nav-wrapper"]}` : `${["nav-wrapper"]}`}
          ></div>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
              
            </li>
            <li>
              <Link to='/shop'>
                Shop
              </Link>
              
            </li>
            <li>
              <Link to='/blog'>
                Blog
              </Link>
              
            </li>
            <li>
              <Link to='/about'>
                About
              </Link>
              
            </li>
            <li>
              <Link to='/contact'>
                Contact
              </Link>
              
            </li>
              
            

          </ul>
          
        </nav>
        <nav className="header-right">
            <span>
              <Link to='/register'>Sign up</Link>
              <Link to='login'>Sign in</Link>
              <Link to='my-orders'>My Orders</Link>
              <Link to='/' onClick={logoutUser}>Logout</Link>
            </span>
            {cart}
        </nav>
        <div className="menu-icon">
          {cart}
          <AiOutlineMenu size={18} onClick={toggleMenu} />
        </div>
        
      </div>
    </header>
  );
}

export default Header;
