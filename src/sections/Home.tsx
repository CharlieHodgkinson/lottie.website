import { Button, Typography } from "antd";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={`${styles.documentPage} ${styles.homePage}`}>
      <div className={styles.homeExplorer}>
        <section className={styles.homeCopy}>
          <span className={styles.fileTypeLabel}>APPLICATION / WELCOME.EXE</span>
          <Typography.Title level={1}>hey there!<br />i'm <b className={styles.purple}>Charlotte Hodgkinson</b></Typography.Title>
          <p className={styles.homeSummary}>Fullstack software engineer building useful things for the web.</p>
          <Button type="primary" href="cv.pdf" download="charlotte_hodgkinson_cv.pdf">Download CV</Button>
        </section>
        <section className={styles.homePreview}>
          <div className={styles.previewLabel}>SYSTEM INFORMATION</div>
          <div className={styles.welcomePanel}>
            <div className={styles.welcomeIcon}>★</div>
            <div>
              <strong>CHARLOTTE'S DESKTOP</strong>
              <p>Welcome to my personal portfolio.</p>
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
