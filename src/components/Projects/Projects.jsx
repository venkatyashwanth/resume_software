import styles from "./Projects.module.scss";

function Project({ title, desc, link }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={link} target="_blank">View Project →</a>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            {/* <div className="container"> */}
                <h2 className={styles.title}>Projects</h2>

                <div className={styles.grid}>
                    <Project
                        title="Advanced YouTube Playlist Player"
                        desc="Production-ready YouTube playlist player with persistent state and synchronized playback."
                        link="https://yt-player910.netlify.app/"
                    />
                    <Project
                        title="Weather Forecast Application"
                        desc="Responsive weather application consuming third-party APIs with charts."
                        link="https://forecastweather7091.netlify.app/"
                    />
                </div>
            {/* </div> */}
        </section>
    )
}