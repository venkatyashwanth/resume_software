import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <h1>
                    Hi, I’m <span>Venkat Yashwanth</span> 👋
                </h1>

                <p className={styles.role}>
                    Frontend Developer | React | Next.js
                </p>

                <p className={styles.desc}>
                    I build responsive, accessible, and production-ready web applications
                    with a strong focus on UI quality and performance.
                </p>

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
    )
}