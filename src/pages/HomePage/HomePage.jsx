
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./HomePage.module.css";
import { useState } from "react";




{/* 마우스 호버 시 타이틀 변경 */}


function HomePage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Header />

      <main>

        {/* 히어로 */}
        <div className={styles.heroTop}>
          <p>PORTFOLIO</p>
          <p>2026</p>
        </div>

        {/* 호버 시 변환하는 타이틀 */}

        <h1 className={styles.heroTitle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        <span className={isHovered ? styles.fadeOut : styles.fadeIn}>
          PORTFOLIO
        </span>

        <span className={isHovered ? styles.fadeIn : styles.fadeOut}>
          AX PLANNING
        </span>
        </h1>

        <div className={styles.heroKeywords}>
          <span>반복되는 업무를 발견하고 <br/>
            AI와 자동화로 더 나은 업무 경험을 설계합니다.
          </span>
        </div>

        <div className={styles.heroBottom}>
          <p>YU NA HYEON</p>
          <p>AX · SERVICE PLANNER</p>
          <p>어절씨구</p>
          <p>어쩌구</p>
          <p>저쩌구</p>
          <p>대충 나중에 채우기</p>
          <p>지금은 모르겠음</p>
        </div>

        {/* 소개 */}
        {/* <h4 className={styles.introduceTitle}> Work Work Work Work Work...... </h4> */}

        <section id="work" className={styles.introduce}>
          <ProjectCard
          image="/images/card1.png"
          alt="AutoStudio 프로젝트"
          number="01"
          title="AUTO STUDIO"
          category="AI IMAGE AUTOMATION SYSTEM"
          year="2026"
          />

          <ProjectCard
          image="/images/card2.png"
          alt="AutoScantool 프로젝트"
          number="02"
          title="AUTO SCANTOOL"
          category="AI IMAGE AUTOMATION SYSTEM"
          year="2026"
          />

          <ProjectCard
          image="/images/card3.png"
          alt="Dims_toc 프로젝트"
          number="03"
          title="Dims_Toc"
          category="AI IMAGE AUTOMATION SYSTEM"
          year="2026"
          />


        </section>
   


        {/* About */}
        <section id="about" className={styles.about}>

          <div className={styles.aboutText}>
            <p className={styles.aboutLabel}>ABOUT</p>

            <h2>
              현장의 반복 업무를 발견하고<br />
              AI와 자동화를 통해<br />
              더 나은 업무 경험을 설계합니다.
            </h2>
          </div>

          <div className={styles.skills}>
            <p className={styles.skillLabel}>SKILL</p>

            <ul>
              <li>AI Workflow</li>
              <li>Service Planning</li>
              <li>UX Design</li>
              <li>Automation</li>
              <li>React</li>
            </ul>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default HomePage;