import React from 'react'
import styles from "./Hero.module.css"
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id='home' className={styles.container}>

        <div className={styles.content}>

            <h1 className={styles.title}>Hi, I'm Aman</h1>

            <p className={styles.subdesc}>Full Stack Developer & BCA Student</p>

            <p className={styles.desc}>Building modern web application with React, Node.js and JavaScript. Open to internships and software development opportunities</p>

            <div className={styles.allbtn}>

            <Link className={styles.btn} to='projects' smooth={true} duration={500}>Projects</Link>

            <a className={styles.btn} href="https://res.cloudinary.com/dp55vvd7j/image/upload/v1786614394/userFiles/fu7wmshqepri3pbk3jrq.jpg" target='_blank' title='Resume'>Resume</a>

            </div>
            
        </div>

        <img className={styles.img} src="/assets/hero/hero1.jpg" alt='my-image' />

    </section>
  )
}

export default Hero