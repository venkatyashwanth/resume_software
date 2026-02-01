import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.availability}>
        Open to Frontend / React opportunities · Notice period: Negotiable
      </p>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} Venkat Yashwanth
      </p>
    </footer>
  );
}
