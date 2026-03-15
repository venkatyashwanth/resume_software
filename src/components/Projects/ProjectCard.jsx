import styles from "./Projects.module.scss";
export default function ProjectCard({project,onClick}) {
    return (
        <div 
            className={`${styles.card} ${project.featured ? styles.featured : ""}`}
            onClick={onClick}    
        >
            {project.featured && <span className={styles.featuredBadge}>Featured</span>}

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            {/* Features */}
            {/* <ul className={styles.highlights}>
                {project.features.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul> */}

            {/* Tech Stack Badges */}
            <div className={styles.badges}>
                {project.tech.map((tech) => (
                    <span key={tech} className={styles.badge}>
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className={styles.links}>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo →
                </a>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.github}
                    aria-label="GitHub Repository"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.24 2.73.12 3.02.74.81 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.68.41.36.77 1.07.77 2.15v3.19c0 .31.21.67.8.56 4.56-1.53 7.85-5.85 7.85-10.95C23.5 5.74 18.27.5 12 .5z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
