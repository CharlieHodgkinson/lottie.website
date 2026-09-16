import { Flex, Typography, Image } from "antd";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={`${styles.documentPage} ${styles.aboutPage}`}>
      <div className={styles.aboutDocument}>
        <aside className={styles.aboutFilePanel}>
          <div className={styles.filePanelHeading}>FILE DETAILS</div>
          <div className={styles.fileDetail}><span>NAME</span><strong>Charlotte</strong></div>
          <div className={styles.fileDetail}><span>LOCATION</span><strong>C:\LOTTIE</strong></div>
          <div className={styles.fileDetail}><span>ROLE</span><strong>Software Engineer</strong></div>
          <div className={styles.fileDetail}><span>STATUS</span><strong>Available</strong></div>
        </aside>
        <article className={styles.aboutSheet}>
          <div className={styles.aboutPortrait}>
            <div className={styles.aboutAccent} />
            <Image src="/profile.jpg" width={260} preview />
            <span>CHARLOTTE.JPG</span>
          </div>
          <div className={styles.aboutCopy}>
            <Typography.Title level={2} className={styles.aboutSheetTitle}>About Charlotte</Typography.Title>
            <Typography.Paragraph>
              Hi, I'm Charlotte. I currently live in London working as a fullstack
              software engineer at Wealth Wizards, where I build web apps with
              Typescript, React and AWS.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Outside of work I like doing anything creative. My favourites are
              crocheting, sewing and oil painting. I also like having an active
              social life and supporting my community.
            </Typography.Paragraph>
          </div>
        </article>
      </div>
    </div>
  );
};
