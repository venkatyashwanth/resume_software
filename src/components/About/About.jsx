import styles from "./About.module.scss";
export default function About() {
    return (
        <section className={styles.about}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.description}>
                Frontend Developer with 4 years of experience working in enterprise
                environments such as NW18 (MoneyControl) and Sony Pictures Network.
                My core strength lies in building clean UI, interactive components,
                and scalable web applications,while collaborating with React teams Most of my advanced React
                experience comes from production-grade personal projects.
            </p>
        </section>
    )
}