import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>
          Hi, I’m <span>Venkat Yashwanth</span> 👋
        </h1>

        <p className={styles.role}>
          Frontend Developer specializing in React & Next.js
        </p>

        <p className={styles.desc}>
          Building accessible, scalable, and production-ready user interfaces
          for media and content-driven web applications.
        </p>

        {/* Featured Project CTA */}
        <div className={styles.featured}>
          <span className={styles.featuredLabel}>Featured Project</span>
          <a
            href="#projects"
            className={styles.featuredLink}
          >
            Advanced YouTube Playlist Player →
          </a>
        </div>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>
          <a href="/resume.pdf" className={styles.secondaryBtn}>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
