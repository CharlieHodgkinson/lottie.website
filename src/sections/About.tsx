import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={`${styles.documentPage} ${styles.aboutPage}`}>
      <div className={styles.aboutDocument}>
        <aside className={styles.aboutFilePanel}>
          <div className={styles.filePanelHeading}>FILE DETAILS</div>
          <div className={styles.fileDetail}><span>NAME</span><strong>Charlotte</strong></div>
          <div className={styles.fileDetail}>
            <span>LOCATION</span>
            <strong>C:\LOTTIE</strong>
          </div>
          <div className={styles.fileDetail}>
            <span>ROLE</span>
            <strong>Software Engineer</strong>
          </div>
          <div className={styles.fileDetail}><span>STATUS</span><strong>Available</strong></div>
        </aside>
        <article className={styles.aboutSheet}>
          <div className={styles.aboutPortrait}>
            <div className={styles.aboutAccent} />
            <img className={styles.aboutImage} src="/profile.jpg" width={260} alt="Charlotte Hodgkinson" />
            <span>CHARLOTTE.JPG</span>
          </div>
          <div className={styles.aboutCopy}>
            <h2 className={styles.aboutSheetTitle}>About Charlotte</h2>
            <p>
              Hi, I'm Charlotte. I currently live in London working as a fullstack
              software engineer at Wealth Wizards, where I build web apps with
              Typescript, React and AWS.
            </p>
            <p>
              Outside of work I like doing anything creative. My favourites are
              crocheting, sewing and oil painting. I also like having an active
              social life and supporting my community.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
