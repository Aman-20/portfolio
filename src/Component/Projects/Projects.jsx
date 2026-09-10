import React from 'react'
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
        <h1>PROJECTS</h1>

        <div className={styles.allcard}>

        <div className={styles.card}>
            
            <img className={styles.cardimg} src="/assets/projects/project4.png" alt='project' />

            <p className={styles.cardtitle}>MERN Task Manager</p>

            <p className={styles.carddesc}>A full-stack task manager with authentication, CRUD operations, search, sorting, and pagination. </p>

            <div className={styles.cardtag}>
                <p>React</p>
                <p>NodeJs</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>JWT Auth</p>
                <p>REST API</p>
            </div>

            <div className={styles.cardbtn}>
                <a href='https://task-manager-mern-umber.vercel.app/' target='_blank'>Demo</a>
                <a href='https://github.com/Aman-20/Task-Manager-MERN.git' target='_blank'>Source</a>
            </div>
        </div>
            
        <div className={styles.card}>

            <img className={styles.cardimg} src="/assets/projects/project1.jpg" alt='project' />

            <p className={styles.cardtitle}>URL Shortener</p>

            <p className={styles.carddesc}> A backend-focused URL shortening service that generates short, shareable links from long URLs and tracks their click usage. </p>

            <div className={styles.cardtag}>
                <p>Node.js</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>EJS</p>
                <p>JWT Auth</p>
            </div>

            <div className={styles.cardbtn}>
                <a href='https://nodejs-url-shortener-crt6.onrender.com/' target='_blank'>Demo</a>
                <a href='https://github.com/Aman-20/nodejs-url-shortener.git' target='_blank'>Source</a>
            </div>
        </div>

        <div className={styles.card}>
            
            <img className={styles.cardimg} src="/assets/projects/project2.png" alt='project' />

            <p className={styles.cardtitle}>Blog Platform</p>

            <p className={styles.carddesc}>A server-rendered blogging platform where authenticated users can create, edit, and manage blog posts</p>

            <div className={styles.cardtag}>
                <p>Node.js</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>EJS</p>
                <p>JWT Auth</p>
            </div>

            <div className={styles.cardbtn}>
                <a href='https://nodejs-blog-rest-api.onrender.com' target='_blank'>Demo</a>
                <a href='https://github.com/Aman-20/nodejs-blog-rest-api.git' target='_blank'>Source</a>
            </div>
        </div>

        <div className={styles.card}>
            
            <img className={styles.cardimg} src="/assets/projects/project3.jpg" alt='project' />

            <p className={styles.cardtitle}>Image Search App</p>

            <p className={styles.carddesc}>A responsive image search app that uses the Pixabay API to browse and discover high-quality images by keyword. </p>

            <div className={styles.cardtag}>
                <p>React</p>
                <p>Pixabay API</p>
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