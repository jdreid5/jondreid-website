import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../assets/profile.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <Link className="navbar-brand js-scroll-trigger" to="/">
        <span className="d-block d-lg-none">Jon Reid</span>
        <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilePic} alt="profile" /></span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
    </nav>
  );
}

export default Navbar;
