import styles from "./Skills.module.scss";

export default function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>Frontend</h3>
                    <p>React, Next.js, JavaScript, HTML, CSS</p>
                </div>

                <div className={styles.card}>
                    <h3>Concepts</h3>
                    <p>
                        Hooks, Component Architecture, Accessibility, State Persistence
                    </p>
                </div>

                <div className={styles.card}>
                    <h3>Tools</h3>
                    <p>
                        Git, GitHub, REST APIs, Chart.js, Recharts
                    </p>
                </div>
            </div>
        </section>
    )
}