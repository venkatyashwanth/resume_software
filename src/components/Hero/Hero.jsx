"use client";
import {Typewriter} from "react-simple-typewriter";
import styles from "./Hero.module.scss";


const techStack = [
    "React",
    "Next.js",
    "Redux",
    "Firebase",
    "JavaScript"
];

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <h1 className={styles.title}>
                    Hi, I’m <span>Venkat Yashwanth</span> 👋
                </h1>
                <h2 className={styles.typing}>
                    <Typewriter
                        words={
                            [
                                "Frontend Developer",
                                "React Developer",
                                "Next.js Developer",
                                "UI Engineer"
                            ]
                        }
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={1500}
                    />
                </h2>

                <p className={styles.desc}>
                    Building scalable UI and modern web applications with <strong>4+</strong> years of experience. Worked on enterprise platforms including Sony Pictures Network and MoneyControl.
                </p>

                {/* Featured Project CTA */}
                <div className={styles.featured}>
                    <span className={styles.featuredLabel}>Featured Project</span>
                    <a
                        href="#projects"
                        className={styles.featuredLink}
                    >
                        ShopSphere Ecommerce →
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

                <ul className={styles.techBadges}>
                    {techStack.map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                            {tech}
                        </span>
                    ))}
                </ul>
            </div>
        </section>
    );
}
