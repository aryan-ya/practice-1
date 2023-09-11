import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link"



const Header = () => {
  return (
 <nav>
  <h1>Techystar</h1>
  <main>
    <Link to={"/"}>Home</Link>
    <Link to={"/contact"}>Contact</Link>
    <a href={"/#about"}>About</a>
    <Link to={"/#brands"}>Brands</Link>
    <Link to={"/#services"}>Services</Link>
    

    

  </main>
 </nav>
  )
}

export default Header;