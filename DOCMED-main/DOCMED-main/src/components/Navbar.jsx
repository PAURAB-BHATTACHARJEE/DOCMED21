import React from "react";
import { Link} from 'react-router-dom';
import { useState, useEffect } from "react";


const Nav = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToogle] = useState(false);

  const [isActive, setIsActive] = useState(false);
      
  const toggleSearchForm = () => {
    setIsActive((prevState) => !prevState);
  };

  const closeSearchForm = () => {
    setIsActive(false);
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const menu = document.querySelector('#menu-bars');
  //     const navbar = document.querySelector('.navbar');
  //     const section = document.querySelectorAll('section');
  //     const navLinks = document.querySelectorAll('header .navbar a');

  //     menu.classList.remove('fa-times');
  //     // navbar.classList.remove('active');
  //     setToogle(!toggle)

  //     section.forEach((sec) => {
  //       const top = window.scrollY;
  //       const height = sec.offsetHeight;
  //       const offset = sec.offsetTop - 150;
  //       const id = sec.getAttribute('id');

  //       if (top >= offset && top < offset + height) {
  //         navLinks.forEach((links) => {
  //           links.classList.remove('active');
  //           document.querySelector(`header .navbar a[href*=${id}]`).classList.add('active');
  //         });
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <header>
      <Link to="/DOCMED"><a class="logo"><i class="fa-solid fa-user-doctor"></i> DOCMED</a></Link>
      <nav className={`${toggle ? "active":"navbar "}`}>
        {/* <ul className="inone">
              {navlinks.map((nav, index) => (
                  <li key={nav.id}
                  className={`${active===nav.title? "active": ""}`}
                  onClick={()=>setActive(nav.title)}>
                      <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
              ))}
            </ul> */}
        <a href="#about">About</a>
        <a href="#departments">Departments</a>
        <a href="#membership">Membership</a>
        <a href="#help">Help</a>
        <a href="#contact">Contact</a>
        <a className="sign-in"><Link to="/DOCMED/login"> Sign In</Link></a>
      </nav>
      <div class="icons">
        <i class={`fas ${toggle ? "fa-times" : "fa-bars"}`} id="menu-bars" onClick={() => setToogle(!toggle)}></i>
        <i class="fas fa-search" id="search-icon" onClick={toggleSearchForm}></i>
      </div>


      <form action="" id="search-form" className={isActive ? 'active':''}>
            <input type="search" placeholder="search here ..." name="" id="search-box" />
            <label htmlFor="search-box" class="fas fa-search"></label>
            <i class="fas fa-times" id="close" onClick={closeSearchForm}></i>
        </form>
    </header>
    
  );
};
// class="fas fa-bars"

export default Nav;