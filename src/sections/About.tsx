import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.documentPage}>
      <div className={styles.aboutDocument}>
        <div className={styles.aboutSheet}>
          <img className={styles.aboutImage} src="/profile.jpg" width={260} alt="Charlotte Hodgkinson" />
        </div>
        <div className={styles.aboutDetails}>
          <div>
            <p>Identity:</p>
            <div className={styles.aboutDetailsInfo}>
              <p>Charlotte Hodgkinson</p>
              <p>Fullstack Software Engineer specialising in frontend development</p>
            </div>
          </div>
          <div>
            <p>Location:</p>
            <div className={styles.aboutDetailsInfo}>
              <p>London</p>
              <p>
                Prefers hybrid working, or office based
              </p>
            </div>
          </div>
          <div>
            <p>Status:</p>
            <div className={styles.aboutDetailsInfo}>
              <p>Open to new roles</p>
              <p>Currently working at Flawless AI</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
