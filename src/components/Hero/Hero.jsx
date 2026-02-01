import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <h1>
                    Hi, I’m <span>Venkat Yashwanth</span> 👋
                </h1>

                <p className={styles.role}>
                    Frontend Developer specializing in React, Next.js and modern JavaScript.
                </p>

                <p className={styles.desc}>
                    Building <strong>accessible</strong>, <strong>scalable</strong>, and
                    <strong>production-ready</strong> user interfaces
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
                    <a href="/Resume_2026.pdf" target="_blank" className={styles.secondaryBtn}>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
