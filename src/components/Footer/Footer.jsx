import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>

      <h2 className={styles.title}>
        LET&apos;S BUILD<br />
        BETTER WORKFLOWS TOGETHER.
      </h2>

      <div className={styles.contact}>
        <div>
          <p className={styles.label}>EMAIL</p>
          <a href="mailto:dec.ynh@gmail.com">이메일주소</a>
        </div>

        <div>
          <p className={styles.label}>GITHUB</p>
          <a href="https://github.com/decynh"
          target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>
        </div>

        <div>
          <p className={styles.label}>BLOG</p>
          <a href="블로그주소" target="_blank" rel="noreferrer">
            Blog ↗
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 YU NA HYEON</p>
        <a href="#">TOP ↑</a>
      </div>

    </footer>
  );
}

export default Footer;