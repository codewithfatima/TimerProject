import React ,{ useState }from 'react';
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom'; 
import { MdClose } from "react-icons/md";
import './navbar.css';
// import logo from './path/to/your/logo.png'; 

const Navbar = () => {
    const [toggle , setToggle] = useState(false);

   

    return (
        <nav  className='navbar'>
            <div className="logo">
                <Link to="/">
                    {/* <img src={} alt="Logo" /> */}
                    <span>HELLO</span>
                </Link>
            </div>
            <div className={`navbar-menu ${toggle ? 'active' : ''}`}>
            <ul>
                <li><Link to="/"  className='link'>Home</Link></li>
                <li><Link to="/about"  className='link'>About</Link></li>
                <li><Link to="/services"  className='link'>Services</Link></li>
                <li><Link to="/contact"  className='link'>Contact</Link></li>
            </ul>
            <div className="navbar-button">
                <button className='btn'>Login</button>
                <button className='btn'>SignUp</button>
            </div>
          </div>
          <div className='icon' onClick={()=>setToggle(!toggle)}>
             {toggle ? <MdClose /> : <HiMiniBars3 />}
            </div>
        </nav>
    );
};

export default Navbar;
