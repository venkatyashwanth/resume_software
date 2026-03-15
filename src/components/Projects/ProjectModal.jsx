import { useEffect } from "react";
import styles from "./Projects.module.scss";
export default function ProjectModal({ project, closeModal }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    },[])

    useEffect(() => {
        const handleEsc = (event) => {
            if(event.key === "Escape"){
                closeModal();
            }
        };
        document.addEventListener("keydown",handleEsc);
        return () => {
            document.removeEventListener("keydown",handleEsc);
        }
    },[closeModal])

    return (
        <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.closeBtn}
                    onClick={closeModal}
                >
                    ✕
                </button>
                <h2 className={styles.modalTitle}>{project.title}</h2>
                <p className={styles.modalSubtitle}>{project.desc}</p>

                <div className={styles.modalSection}>
                    <h3>Tech Stack</h3>
                    <ul className={styles.techStack}>
                        {project.tech.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </ul>
                </div>

                <div className={styles.modalSection}>
                    <h3>Key Features</h3>
                    <ul>
                        {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.modalSection}>
                    <h3>Architecture</h3>
                    <ul>
                        {project.architecture.map((item,i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>


                <div className={styles.modalButtons}>
                        <a href={project.live} target="_blank">
                            Live Demo
                        </a>
                        {project.github && (
                            <a href={project.github} target="_blank">
                                GitHub
                            </a>
                        )}
                </div>
            </div>
        </div>
    )
}