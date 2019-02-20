import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/ionvarsesculogo.svg'
//import {withPrefix} from 'gatsby' - only needed if I need subfolders

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Ion Varsecsu" style={{ width: '88px' }} />
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered">
      <a className="navbar-item" href="https://portofolio.ionvarsescu.tk" aria-labelledby="Ion Varsescu's Portofolio">Portofolio</a>
      <a className="navbar-item" href="https://github.com/Nei-V" aria-labelledby="Ion Varsescu's Github" target="_blank" rel="noopener noreferrer">Github</a>
      <Link className="navbar-item" to="/contact">
          Contact
        </Link>
{/* 
        The next links are only for experiments - can be accessed directly
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link> */}
       {/*  could be used if I wanted a subfolder structure. in this chase I'm using subdomain (it's like an external link for Gatsby.)
        <Link className="navbar-item" to={withPrefix(`/portofolio/`)}>
          Portofolio
        </Link> */}
        
      </div>
      <div className="navbar-end has-text-centered">
        <a
          className="navbar-item"
          href="https://github.com/Nei-V"
          //href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"  - link to the boilerplate
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Ion Varsescu Github" />
          </span>
        </a>
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
