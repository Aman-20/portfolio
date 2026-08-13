import React from 'react'
import styles from './App.module.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Projects from './Component/Projects/Projects';
import Skill from './Component/Skill/Skill';
import Contact from './Component/Contact/Contact';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App