import styles from "./Experience.module.scss";

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <h2 className={styles.title}>Experience</h2>

            <div className={styles.card}>
                <p className={styles.role}>
                    Frontend Developer — NW18 (MoneyControl), Sony Pictures Network
                </p>
                <span className={styles.meta}>
                    On-site via Neosoft Technologies
                </span>
            </div>
        </section>
    );
}