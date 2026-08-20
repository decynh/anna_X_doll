import styles from "./ProjectCard.module.css";

function ProjectCard({ image, alt, title, category, year, number }) {
  return (
    <article className={styles.card}>

      <div className={styles.info}>

        <span className={styles.number}>
          {number}
        </span>

        <h3 className={styles.title}>
          {title}
        </h3>

        <p className={styles.category}>
          {category}
        </p>

        <p className={styles.description}>
          AI 기반 자동화 시스템으로
          반복 업무를 효율적으로 개선합니다.
        </p>

        <button>
          VIEW PROJECT →
        </button>

      </div>


      <img 
        className={styles.image}
        src={image}
        alt={alt}
      />

    </article>
  );
}

export default ProjectCard;