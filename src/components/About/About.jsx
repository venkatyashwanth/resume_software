import styles from "./About.module.scss";
export default function About() {
    return (
        <section className={styles.about}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.description}>
                Frontend Developer with 4 years of experience working in enterprise environments such as NW18 (MoneyControl) and Sony Pictures Network. I specialize in building clean, responsive user interfaces, interactive components and scalable web applications.
            </p>
            <p className={styles.description}>
                I enjoy translating designs into high-quality UI and collaborating with engineering teams to deliver reliable production features. I also build advanced personal projects using React and Next.js to continuously improve my frontend architecture skills.
            </p>
        </section>
    )
}