import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        Anna x Doll
      </div>

      <nav className={styles.menu}>
        <a href="/">Home</a>
        <a href="/">Gallery</a>
        <a href="/">About</a>
      </nav>

      <div></div>

      <div className="introduce">
        <h6> 작은소제목 </h6>
        <h3> 큰 문장 test </h3>
        <button className="introducebutton">버튼</button>
      </div>


    </header>
  );
}

export default Header;