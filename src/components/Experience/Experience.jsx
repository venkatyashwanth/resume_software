import styles from "./Experience.module.scss";

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <h2 className={styles.title}>Experience</h2>

            {/* NW18 */}
            <div className={styles.card}>
                <div className={styles.header}>
                    <p className={styles.role}>
                        Frontend Developer — NW18 (MoneyControl)
                    </p>

                    <span className={styles.metaRight}>
                        2024 – Present
                        <span className={styles.location}>
                            <LocationIcon />
                            Mumbai, IN
                        </span>

                        {/* Future use */}
                        <span className={styles.workMode}>On-Site</span>
                    </span>
                </div>

                <span className={styles.meta}>
                    On-site via Neosoft Technologies
                </span>

                <ul className={styles.impacts}>
                    <li>
                        Built component-ready UI and interactive features used across
                        high-traffic production pages.
                    </li>
                    <li>
                        Collaborated with React teams to ensure UI consistency and
                        accessibility compliance.
                    </li>
                </ul>
            </div>

            {/* Sony */}
            <div className={styles.card}>
                <div className={styles.header}>
                    <p className={styles.role}>
                        Frontend Developer — Sony Pictures Network
                    </p>

                    <span className={styles.metaRight}>
                        2022 – 2024
                        <span className={styles.location}>
                            <LocationIcon />
                            Mumbai, IN
                        </span>
                        {/* Future use */}
                        <span className={styles.workMode}>On-Site</span>
                    </span>
                </div>

                <span className={styles.meta}>
                    On-site via Neosoft Technologies
                </span>

                <ul className={styles.impacts}>
                    <li>
                        Developed responsive UI layouts and interactive components for
                        media-focused web applications.
                    </li>
                    <li>
                        Worked closely with design and development teams to maintain UI
                        quality and cross-browser consistency.
                    </li>
                </ul>
            </div>
        </section>
    );
}

/* Small SVG icon component */
function LocationIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
    );
}
