import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
          <ul id="nav-mobile" className="left">
            <ul className="nav justify-content-start align-items-center">
            <a href="/"><img className="nav-logo" src="/sakkaa-logos_black.png" height='120' alt="logo" border="0"/></a>
                <li className="nav-item">
                    <a className="nav-link" href="/messages">Message Board</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ballots">Ballot Index</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/users">Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/profile">My Profile</a>
                </li>
                <li className="nav-item">
                <a href="/" className="nav-link" onClick={handleLogout}>Log Out</a>
                </li>
            </ul>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
          <ul id="nav-mobile" className="left">
          <ul className="nav justify-content-start align-items-center">
          <a href="/"><img className="nav-logo" src="/sakkaa-logos_black.png" height='150' alt="logo" border="0"/></a>
            <li className="nav-item">
                <a className="nav-link" href="/messages">Message Board</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/signup">Sign Up</a>
            </li>
          </ul>
          </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;