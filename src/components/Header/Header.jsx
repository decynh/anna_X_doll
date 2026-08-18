import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>YUNAHYEON</div>

      <nav className={styles.nav}>
        <a href="#about">ABOUT</a>
        <a href="#work">WORK</a>
        <a href="#contact">CONTACT</a>
      </nav>

      
    </header>
  );
}

export default Header;