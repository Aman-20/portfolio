import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav className={styles.navbar}>

    <a className={styles.title} href='/'>Aman.dev</a>

    <div className={styles.menu}>

        <img className={styles.menuBtn} src={ menuOpen? "/assets/nav/close.png" : "/assets/nav/menu.png"} alt='menu' onClick={()=>{setMenuOpen(!menuOpen)}}/>

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen }`} onClick={()=>{setMenuOpen(false)}}>
            <li> <Link to='home' smooth={true} duration={500}>Home</Link> </li>
            <li> <Link to='about' smooth={true} duration={500}>About</Link> </li>
            <li> <Link to='projects' smooth={true} duration={500}>Projects</Link> </li>
            <li> <Link to='contact' smooth={true} duration={500}>Contact</Link> </li>
        </ul>

    </div>

    </nav>
    </>
  )
}

export default Navbar