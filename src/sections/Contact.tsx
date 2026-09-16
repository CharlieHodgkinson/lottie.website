import { Typography } from "antd";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={`${styles.documentPage} ${styles.contactPage}`}>
      <div className={styles.contactDocument}>
        <div className={styles.contactHeader}>
          <div className={styles.contactAvatar}>@</div>
          <div><Typography.Title level={2} className={styles.contactDocumentTitle}>Charlotte Hodgkinson</Typography.Title><p>Address card / London, UK</p></div>
        </div>
        <div className={styles.contactFields}>
          <div className={styles.contactField}><span>EMAIL</span><Typography.Link href="mailto:charlotte.hodgkinson4@gmail.com">charlotte.hodgkinson4@gmail.com</Typography.Link></div>
          <div className={styles.contactField}><span>GITHUB</span><Typography.Link href="https://github.com/CharlieHodgkinson" target="_blank" rel="noreferrer"><FaGithub /> github.com/CharlieHodgkinson</Typography.Link></div>
          <div className={styles.contactField}><span>LINKEDIN</span><Typography.Link href="https://www.linkedin.com/in/charlotte-hodgkinson-669349174" target="_blank" rel="noreferrer"><FaLinkedin /> linkedin.com/charlotte-hodgkinson</Typography.Link></div>
        </div>
        <div className={styles.contactNote}><strong>MESSAGE</strong><p>Feel free to drop me an email. I'm always happy to talk about software, creative work, and new opportunities.</p></div>
      </div>
    </div>
  );
};
