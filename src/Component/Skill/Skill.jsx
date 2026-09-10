import React from 'react'
import styles from "./Skill.module.css"

const Skill = () => {
  return (
    <section id='about' className={styles.container}>
    <h1>About Me</h1>

    <div className={styles.subContainer}>

        <div className={styles.about}>
            
            <p>I'm a BCA student and full-stack developer passionate about building practical, user-focused web applications. I work primarily with React, Node.js, Express, and MongoDB, and I have hands-on experience building applications with authentication systems, REST APIs, and modern frontend architectures. </p>

            <p>I'm currently seeking internship and software development opportunities where I can apply my skills to real-world projects, collaborate with experienced teams, and continue growing as a developer.</p>

            <p>My long term goal is to expand my expertise in cloud infrastructure, automation, and DevOps.</p>

        </div>

        <div className={styles.content}>

            <div className={styles.front}>
                <h2>Frontend</h2>
                <div className={styles.skills}>

                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/react.png" alt='react'/>
                        <p>ReactJS</p>
                    </div>

                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/js.png" alt='javascript'/>
                        <p>JS</p>
                    </div>

                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/html.png" alt='html'/>
                        <p>HTML</p>
                    </div>

                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/css.png" alt='css'/>
                        <p>CSS</p>
                    </div>
                </div>
            </div>

            <div className={styles.front}>
                <h2>Backend</h2>
                <div className={styles.skills}>
                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/node.png" alt='nodejs'/>
                        <p>NodeJS</p>
                    </div>

                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/express.png" alt='expressjs'/>
                        <p>ExpressJS</p>
                    </div>

                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/mongo.png" alt='mongodb'/>
                        <p>MongoDB</p>
                    </div>

                </div>
            </div>

            <div className={styles.front}>
                <h2>Tools</h2>
                <div className={styles.skills}>
                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/github.png" alt='github'/>
                        <p>Github</p>
                    </div>

                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/postman.png" alt='Postman'/>
                        <p>Postman</p>
                    </div>

                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/docker.png" alt='docker'/>
                        <p>Docker</p>
                    </div>

                    <div className={styles.logo}>
                        <img className={styles.logoImg} src="/assets/skills/cloud.png" alt='aws'/>
                        <p>Aws</p>
                    </div>
                </div>
            </div>

        </div>

    </div>

    </section>
  )
}

export default Skill