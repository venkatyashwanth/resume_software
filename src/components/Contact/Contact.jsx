import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.title}>Contact</h2>

            <div className={styles.card}>
                <p className={styles.item}>
                    📧{" "}
                    <a href="mailto:mudiliyashwanth@gmail.com">
                        mudiliyashwanth@gmail.com
                    </a>
                </p>

                <p className={styles.item}>
                    🔗{" "}
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    {" | "}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </section>
    );
}