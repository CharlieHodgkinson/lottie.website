import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.documentPage}>
      <div className={styles.homeExplorer}>
        <section className={styles.homeCopy}>
          <h1>
            Hey there!<br />
            I'm <b className={styles.purple}>Charlotte Hodgkinson</b>
          </h1>
          <p className={styles.homeSummary}>
            Fullstack software engineer building useful things for the web.
          </p>
          <a
            className={styles.downloadButton}
            href="cv.pdf"
            download="charlotte_hodgkinson_cv.pdf"
          >
            Download CV
          </a>
        </section>
        <section className={styles.homePreview}>
          <div className={styles.previewLabel}>SYSTEM INFORMATION</div>
          <div className={styles.welcomePanel}>
            <div className={styles.welcomeIcon}>★</div>
            <div>
              <strong>CHARLOTTE'S PORTFOLIO</strong>
              <p>Welcome to my portfolio site.</p>
            </div>
          </div>
          <dl className={styles.homeProperties}>
            <div><dt>ROLE</dt><dd>Software Engineer</dd></div>
            <div><dt>LOCATION</dt><dd>London, UK</dd></div>
            <div><dt>FOCUS</dt><dd>React / TypeScript / AWS</dd></div>
            <div><dt>STATUS</dt><dd><span className={styles.statusLight} /> Available</dd></div>
          </dl>
        </section>
      </div>
    </div>
  );
};
