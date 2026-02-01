import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.nav}>
                    <span className={styles.logo}>Yashwanth</span>
                    <nav>
                        <a href="#projects">Projects</a>
                        <a href="#experience">Experience</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}