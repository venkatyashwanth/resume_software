import styles from "./Projects.module.scss";

function Project({
  title,
  desc,
  link,
  github,
  stack,
  highlights,
  featured = false,
}) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {featured && <span className={styles.featuredBadge}>Featured</span>}

      <h3>{title}</h3>
      <p>{desc}</p>

      {/* Key Highlights */}
      <ul className={styles.highlights}>
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Tech Stack Badges */}
      <div className={styles.badges}>
        {stack.map((tech) => (
          <span key={tech} className={styles.badge}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.links}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Live Demo →
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
          aria-label="GitHub Repository"
        >
          {/* GitHub SVG icon */}
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
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.grid}>
        <Project
          featured
          title="Advanced YouTube Playlist Player"
          desc="Production-ready YouTube playlist player with persistent state and synchronized playback."
          link="https://yt-player910.netlify.app/"
          github="https://github.com/yourusername/yt-player"
          highlights={[
            "Persistent playback time & volume across sessions",
            "Playlist state management synchronized across components",
          ]}
          stack={["Next.js", "React", "SCSS", "YouTube API"]}
        />

        <Project
          title="Weather Forecast Application"
          desc="Responsive weather application consuming third-party APIs with charts."
          link="https://forecastweather7091.netlify.app/"
          github="https://github.com/yourusername/weather-app"
          highlights={[
            "Real-time weather data with API error handling",
            "Responsive UI with charts and reusable components",
          ]}
          stack={["React", "REST API", "Charts", "Responsive UI"]}
        />
      </div>
    </section>
  );
}
