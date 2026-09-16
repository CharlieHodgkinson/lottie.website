import { PropsWithChildren } from "react";
import { Windows95Bar } from "../components/Windows95Bar";
import { FaReact, FaNodeJs, FaNpm, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNx,
  SiServerless,
  SiTerraform,
  SiStorybook,
  SiCypress,
  SiJest,
  SiCucumber,
  SiAwslambda,
  SiGraphql,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import styles from "./Technology.module.css";

const technologies = [
  { name: "React JS", Icon: FaReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node JS", Icon: FaNodeJs },
  { name: "NPM", Icon: FaNpm },
  { name: "NX monorepos", Icon: SiNx },
  { name: "AWS", Icon: FaAws },
  { name: "Serverless Framework", Icon: SiServerless },
  { name: "Hashicorp Terraform", Icon: SiTerraform },
  { name: "Storybook JS", Icon: SiStorybook },
  { name: "Cypress Testing", Icon: SiCypress },
  { name: "Jest JS", Icon: SiJest },
  { name: "Cucumber JS", Icon: SiCucumber },
  { name: "AWS Lambda", Icon: SiAwslambda },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Github", Icon: SiGithub },
  { name: "GitLab", Icon: SiGitlab },
];

export const Technology = () => {
  return (
    <div className={styles.filePickerPage}>
      <Windows95Bar className={styles.fileViewToolbar}>
        <span>VIEW</span>
        <strong>Large Icons</strong>
        <span className={styles.fileViewCount}>21 objects</span>
      </Windows95Bar>
      <section className={styles.programGroup}>
        <Windows95Bar className={styles.programGroupTitle}>
          <span>▣</span> DEVELOPMENT TOOLS
        </Windows95Bar>
        <div className={styles.fileGrid}>
          {technologies.map(({ name, Icon }, i) => (
            <div className={styles.skillFile} key={name + i} title={name}>
              <div className={styles.skillFileIcon}>
                <Icon className={styles.technologyIcon} size={42} />
              </div>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className={`${styles.programGroup} ${styles.methodsGroup}`}>
        <Windows95Bar className={styles.programGroupTitle}>
          <span>▤</span> WORK METHODS
        </Windows95Bar>
        <div className={styles.practiceList}>
          {["agile", "kanban", "DevOps", "CI/CD", "scrum", "TDD"].map((text) => <Badge key={text}>{text}</Badge>)}
        </div>
      </section>
    </div>
  );
};

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ width: "max-content" }}>
      <p className={styles.skillBadge}>
        {children}
      </p>
    </div>
  );
};
