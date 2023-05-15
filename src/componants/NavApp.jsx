import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./appnavbar.css";
import lions from '../Images/lions.png';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <>
    <nav className="navigation">
      <a href="/" className="brand-name">
      <img src={lions} className='lionicon' alt=''/>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
          <Link className="link active" to="/">Home</Link>
          </li>
          <li>
          <Link className="link" to="/About">About Us</Link>
          </li>
          <li>
          <Link className="link" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
     <Outlet />
     </>
  );
}