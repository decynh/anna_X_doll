import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <Header />

      <main>

        {/* 히어로 */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            AX PLANNER
          </h1>

        <div className={styles.heroImageBox}>

            {/* <button className={styles.counseling}>💬 상담하러 가기</button> */}
          </div>
        </section>

        {/* 소개 */}
        <section className={styles.introduce}>
          
        <h2>포트폴리오</h2>

        <p>
          흠
        </p>



          
        </section>

        {/* 갤러리 */}
        <section>
        </section>

        {/* About */}
        <section>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default HomePage;