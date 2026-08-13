import React from 'react'
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id='contact' className={styles.container}>

        <div className={styles.left}>
            <h1>Contact</h1>
            <p>Feel free to reach out!</p>
        </div>
        
        <div className={styles.right}>

            <div className={styles.link}>
                <img src="/src/assets/contact/linkedin.png" alt='linkedin' />
                <a href="https://www.linkedin.com/in/aman-nishad-dev" target='_blank' >LinkedIn</a>
            </div>

            <div className={styles.link}>
                <img src="/src/assets/contact/github.png" alt='github' />
                <a href="https://github.com/Aman-20" target='_blank'>Github</a>
            </div>

            <div className={styles.link}>
                <img src="/src/assets/contact/email.png" alt='gmail' />
                <a href="mailto:aman.nishad.dev@gmail.com">Email Me</a>
            </div>

        </div>

    </section>
  )
}

export default Contact