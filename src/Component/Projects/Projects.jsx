import React from 'react'
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
        <h1>PROJECTS</h1>

        <div className={styles.allcard}>
            
        <div className={styles.card}>

            <img className={styles.cardimg} src="/src/assets/projects/project1.png" alt='project' />

            <p className={styles.cardtitle}>URL Shortener</p>

            <p className={styles.carddesc}> URL shortening website that generates short, shareable links from long URL and track their usage </p>

            <div className={styles.cardtag}>
                <p>Node.js</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>Authentication</p>
                <p>JWT</p>
            </div>

            <div className={styles.cardbtn}>
                <a href='https://dnafork.up.railway.app/url' target='_blank'>Demo</a>
                <a href='https://github.com/Aman-20/nodejs-url-shortener.git' target='_blank'>Source</a>
            </div>
        </div>

        <div className={styles.card}>
            
            <img className={styles.cardimg} src="/src/assets/projects/project2.png" alt='project' />

            <p className={styles.cardtitle}>Blog Platform</p>

            <p className={styles.carddesc}>A server-rendered blogging platform where authenticated users can create, edit, and manage blog posts</p>

            <div className={styles.cardtag}>
                <p>Node.js</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>Ejs</p>
                <p>JWT</p>
                <p>Authentication</p>
            </div>

            <div className={styles.cardbtn}>
                <a href='https://nodejs-blog-rest-api-production.up.railway.app/' target='_blank'>Demo</a>
                <a href='https://github.com/Aman-20/nodejs-blog-rest-api.git' target='_blank'>Source</a>
            </div>
        </div>

        <div className={styles.card}>
            
            <img className={styles.cardimg} src="/src/assets/projects/project3.png" alt='project' />

            <p className={styles.cardtitle}>Pixabay Image Search</p>

            <p className={styles.carddesc}>A responsive image search application that uses the pixabay API to search and browse high quality images by keyword. </p>

            <div className={styles.cardtag}>
                <p>React</p>
                <p>API</p>
                <p>Bootstrap</p>
            </div>

            <div className={styles.cardbtn}>
                <a href='https://pixabay-clone-react-js.vercel.app/' target='_blank'>Demo</a>
                <a href='https://github.com/Aman-20/PixabayClone_ReactJS.git' target='_blank'>Source</a>
            </div>
        </div>

        </div>
    </section>
  )
}

export default Projects