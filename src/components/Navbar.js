import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img
              src={process.env.PUBLIC_URL + '/logo.svg'}
              alt="reaktor logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon className="fas" icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/facemasks" className="nav-links" onClick={closeMenu}>
                Facemasks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/beanies" className="nav-links" onClick={closeMenu}>
                Beanies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gloves" className="nav-links" onClick={closeMenu}>
                Gloves
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
